const express = require('express');
const https = require('https');
const router = express.Router();

const mdb = require('./dbapi');
const db = new mdb.Database();

const gamesCollection = require('./config').gamesCollection;

router.get('/search', (req, response, next) => {
  const options = {
    hostname: 'api.gettyimages.com',
    port: 443,
    path: '/v3/search/images?fields=id,title,thumb,referral_destinations&phrase='+ req.query.q +'&sort_order=best',
    method: 'GET',
    headers: {
      'Api-Key': '697wgfynhw53p7fzsw7dbder',
    },
  };

  const forwardRequest = https.request(options, (res) => {
    res.on('data', (data) => {
      data = JSON.parse(data);
      res.statusCode = 200;
      const resData = {
        word: req.query.q,
        images: [],
      };

      data.images.forEach((item) => {
        resData.images.push(item.display_sizes[0].uri);
      });

      response.setHeader('Content-type', 'application/json');
      response.send(JSON.stringify(resData));
    });
  });

  forwardRequest.on('error', (e) => {
    response.statusCode = 500;
    response.send(e);
  });
  forwardRequest.end();
});

/*
curl -H "Content-Type: application/json" -H "Accept: application/json" \
-X POST \
-d '{"word":"king","images":["URL1", "URL2"]}' http://localhost:3000/adminapi/saveword
*/
router.post('/saveword', function(req, res) {
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

// Helper Endpoints
router.get('/', function(req, res, next) {
  res.send('Admin API server is running.');
});

module.exports = router;
