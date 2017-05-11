const express = require('express');
const http = require('http');
const mdb = require('./dbapi');
const router = express.Router();
const db = new mdb.Database();
const config = require('./config');
const fs = require('mz/fs');

// Pexel API search
router.get('/search', (req, response, next) => {
  const options = {
    hostname: 'api.pexels.com',
    path: '/v1/search?query=' + req.query.q + '&per_page=100&page=1',
    method: 'GET',
    headers: {
      'Authorization': process.env.PEXELS_KEY,
    },
  };

  const forwardRequest = http.request(options, (res) => {
    let fullRes ='';
    res.on('data', (data) => {
      fullRes += data;
    });
    res.on('end', ()=>{
      response.setHeader('Content-type', 'application/json');
      try {
        const data = JSON.parse(fullRes);
        const resData = {
          word: req.query.q,
          images: [],
        };

        data.photos.forEach((item) => {
          resData.images.push(item.src.medium);
        });

        res.statusCode = 200;
        response.send(JSON.stringify(resData));
      } catch(e) {
        console.log(e);
        response.statusCode = 500;
        response.send({error: 'Server error'});
      }
    });
  });

  forwardRequest.on('error', (e) => {
    response.statusCode = 500;
    response.send({error: e});
  });

  forwardRequest.end();
});

/*
curl -H "Content-Type: application/json" -H "Accept: application/json" \
-X POST \
-H "Cookie: userid=123" \
-d '{"word":"KIng","images":["URL1", "URL2"]}' http://localhost:8080/adminapi/saveword
*/
router.post('/saveword', function(req, res) {
  if (!(config.COOKIE_NAME in req.cookies))
  return res.status(400).send('Cookie not provided.');
  const sessionId = req.cookies[config.COOKIE_NAME];
  db.getUser(sessionId, (user) => {
    if (user === false || user === 'No User.') return res.status(500).send('Error Occurred');
    if (config.WHITELISTED_ADMINS.indexOf(user.email) < 0) return res.status(400).send('Invalid user');
    let status = {
      'Saved': 200,
      'Duplicate': 400,
      'Error': 500,
    };
    // validate(req.body)
    db.checkWordExists(req.body.word, (message) => {
      if (message === false) {
        var payload = req.body;
        payload.author = user.email;
        db.insertWordInCollection(payload, (message) => {
          res.status(status[message]).send(message);
        });
      } else {
        res.status(status[message]).send(message);
      }
    });
  });
});

/*
curl -H "Content-Type: application/json" -H "Accept: application/json" \
-X POST \
-H "Cookie: userid=123" \
-d '{"words": [{"word":"dfg1","images":["URL1", "URL2"]}, {"word":"ghj","images":["URL1", "URL2"]}]}' http://localhost:8080/adminapi/saveword
*/
router.post('/bulksave', function(req, res) {
  if (!(config.COOKIE_NAME in req.cookies))
  return res.status(400).send('Cookie not provided.');
  const sessionId = req.cookies[config.COOKIE_NAME];
  db.getUser(sessionId, (user) => {
    if (user === false || user === 'No User.')
      return res.status(500).send('Error Occurred in user lookup');
    if (config.WHITELISTED_ADMINS.indexOf(user.email) < 0)
      return res.status(400).send('Invalid user');

    let dbPromises = [];
    if (req.body.hasOwnProperty('word')) {
      dbPromises.push(saveWord(req.body, user.email));
    } else {
      res.status(400).send('Invalid request format');
    }

    Promise.all(dbPromises).then((results) => {
      let response = {Saved: 0, Duplicate: 0, errors: 0};
      for (var i = 0; i < results.length; i++) {
        if (results[i] === 'Duplicate' || results[i] === 'Saved') {
          response[results[i]] += 1;
        } else response.errors += 1;
      }
      res.send(JSON.stringify(response));
    })
    .catch((err) => {
      res.status(500).send('Unknown Error Occurred, some words might have been saved');
    });
  });
});

function saveWord(payload, email) {
  return new Promise((resolve, reject) => {
    console.log(payload.word);
    db.checkWordExists(payload.word, (err, message) => {
      if (err) return reject(err);
      if (message === true) {
        return resolve('Duplicate');
      }
      payload.author = email;
      db.insertWordInCollection(payload, (err, message) => {
        if (err) return reject(err);
        resolve(message);
      });
    });
  });
}

// Endpoint to pick the words from ./routes/wordlist.txt and create game configs
// curl localhost:8080/adminapi/makegames?wordcount=2
router.get('/makegames', (req, res, next) => {
  let wordcount = req.query.wordcount;
  fs.readFile('./routes/wordlist.txt', 'utf8', function (err, data) {
    if (err) {
      res.status(500).send('Error Occurred');
      return console.log(err);
    }
    data = data.replace(/(?:\r\n|\r|\n)/g, '').replace(/( )/g, '');
    let dbLookupsPromises = checkIfWordAlreadyExists(data, wordcount);

    let resData = {words: []};
    Promise.all(dbLookupsPromises)
    .then((results) => {
      let pexelCalls = [];
      for (var i = 0; i < results.length; i++) {
        if (!results[i].found) {
          // response object containing the word
          resData.words.push({word: results[i].word, images: []});
          // API calls to pexel
          pexelCalls.push(pexelReq(results[i].word));
          wordsProcessed += 1;
        }
      }
      return Promise.all(pexelCalls); // return a promise instead of a list to allow chaining the promises
    })
    .then((results) => {
      for (var j = 0; j < results.length; j++) {
        if (!results[j].hasOwnProperty('photos')) continue;
        // Get 1st 4 photos from the pexel api response
        results[j].photos.slice(0, 4).forEach((item) => {
          resData.words[j].images.push(item.src.medium);
        });
      }
      res.send(JSON.stringify(resData));
    })
    .catch((err) => {
      // log error
      return res.status(500).send('Error Occurred');
    });
  });
});

var wordsProcessed = 0;
function checkIfWordAlreadyExists(data, wordcount) {
  let words = data.split(',');
  let dbLookups = [];
  for (var i = wordsProcessed; i < words.length && dbLookups.length < wordcount; i++) {
    let word = words[i];
    // remove \n which may have crept in the last word
    if (word.slice(-1) === '\n') word = word.slice(0, word.length - 1);
    if (word.length < 4) continue;

    dbLookups.push(new Promise((resolve, reject) => {
      db.checkWordExists(word, (err, found) => {
        if (err) return reject(err);
        resolve({'found': found, 'word': word});
      });
    }));
  }
  return dbLookups;
}

function pexelReq(word) {
  return fetch('http://api.pexels.com/v1/search?query=' + word + '&per_page=100&page=1', {
    headers: {
      'Authorization': process.env.PEXELS_KEY
    }
  })
  .then((res) => {
    return res.json();
  });
}

// Helper Endpoints
router.get('/', function(req, res, next) {
  res.send('Admin API server is running.');
});

module.exports = router;
