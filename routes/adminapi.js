const express = require('express');
const router = express.Router();
const https = require('https');
const MongoClient = require('mongodb').MongoClient;

// Connection URL 
const url = 'mongodb://localhost:27017/myproject';
let _db;
let collections;
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  if(err === null)
  {
    console.log("Connected correctly to server");
    _db = db;
    collections = db.collection('documents');
  }
});

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
  collections.find({
    word: req.body.word
  }).toArray(function(err,results) {
    if(err == null && results.length == 0) {
      collections.insert(req.body,function(err, results) {
        if(err != null) {
          res.statusCode = 500;
          res.send('error');  
        } else {
          res.statusCode = 200;
          res.send('saved');
        }
      });
    } else if(err == null && results.length > 0) {
        res.statusCode = 400;
        res.send('duplicate word');  
    } else {
        res.statusCode = 500;
        res.send('error');
    }
  })
});
module.exports = router;