const express = require('express');
const router = express.Router();
const https = require('https');
const dbapi = require('./dbapi');
const db = new dbapi.database();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hi');
});

/* GET users listing. */
router.get('/search', function(req, response, next) {
  var options = {
    hostname: 'api.gettyimages.com',
    port: 443,
    path: '/v3/search/images?fields=id,title,thumb,referral_destinations&phrase='+req.query.q+'&sort_order=best',
    method: 'GET',
    headers: {
      'Api-Key': '697wgfynhw53p7fzsw7dbder'
    }
  };

  var forwardRequest = https.request(options, (res) => {
    res.on('data', (data) => {
      data = JSON.parse(data);

      res.statusCode = 200;
      var resData = {
        'word': req.query.q,
        images: [] 
      };

      data.images.forEach(item=>{
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

router.post('/saveword', function(req, res) {
  var status = {
    'Saved': 200,
    'Duplicate': 400,
    'Error': 500,
  }
  db.insertInCollection('games', req.body, (message) => {
    res.statusCode = status[message];
    res.send(message);
  });
});

module.exports = router;
