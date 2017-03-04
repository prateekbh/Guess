const express = require('express');
const router = express.Router();

const mdb = require('./dbapi');
const db = new mdb.Database();
const config = require('./config');
const jsBase = require('js-base64').Base64;
const env = process.env.NODE_ENV || 'development';
router.get('/', function(req, res, next) {
  res.send('Games server is running.');
});

/*
curl -H "Cookie: userid=123" \
http://localhost:8080/gamesapi/randomwords
*/
router.get('/randomwords', function(req, res, next) {
  db.getRandomWords(config.WORD_COUNT, (words) => {
    if (!words) return res.status(500).send('Error occurred.');
    if (config.SEND_ENCRYPTED_WORD) {
      for (let i = 0; i < words.length; i++) {
        words[i].encrypted_word = jsBase.encode(words[i].word);
      }
    }
    res.send(JSON.stringify({'words': words}));
  });
});

// Helper endpoints
// curl http://localhost:8080/gamesapi/allwords
router.get('/allwords', function(req, res, next) {
  if(env === 'development') {
    db.readCollection(config.gamesCollection, (results) => {
      res.send(results);
    });
  } else {
    res.status(500).send('No');
  }
});

module.exports = router;
