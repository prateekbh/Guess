const express = require('express');
const http = require('http');
const mdb = require('./dbapi');
const router = express.Router();
const db = new mdb.Database();
const config = require('./config');

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
-d '{"word":"KIng","images":["URL1", "URL2"]}' http://localhost:3000/adminapi/saveword
*/
router.post('/saveword', function(req, res) {
  if (config.SAVEWORD_KEY_VALIDATION) {
    if (!(config.COOKIE_NAME in req.cookies))
      return res.status(400).send('Cookie not provided.');
    var sessionId = req.cookies[config.COOKIE_NAME];
    db.getUser(sessionId, (user) => {
      if (user === false || user === 'No User.') return res.status(500).send('Error Occurred');
      if (config.WHITELISTED_ADMINS.indexOf(user.email) < 0) return res.status(400);
      let status = {
        'Saved': 200,
        'Duplicate': 400,
        'Error': 500,
      };
      // validate(req.body)
      db.checkWordExists(req.body.word, (message) => {
        if (message === false) {
          db.insertWordInCollection(req.body, (message) => {
            res.status(status[message]).send(message);
          });
        } else {
          res.status(status[message]).send(message);
        }
      });
    });
    // if sessionId is not whitelisted, throw error
  }
});

// Helper Endpoints
router.get('/', function(req, res, next) {
  res.send('Admin API server is running.');
});

module.exports = router;
