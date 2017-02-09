const express = require('express');
const router = express.Router();

const mdb = require('./dbapi');
const db = new mdb.Database();
const config = require('./config');
const Cryptr = require('cryptr');

router.get('/', function(req, res, next) {
  res.send('Games server is running.');
});

/*
curl -H "Cookie: userid=588d937f009f04028792504e" \
http://localhost:3000/gamesapi/randomwords
*/
router.get('/randomwords', function(req, res, next) {
  db.getRandomWords(config.WORD_COUNT, (words) => {
    if (!words) return res.status(500).send('Error occurred.');
    if (config.SEND_ENCRYPTED_WORD) {
      if (!req.headers.hasOwnProperty('cookie')) {
        return res.status(400).send('Cookie not provided.');
      }
      const sessionId = req.headers['cookie'].substr(config.COOKIE_NAME.length + 1); // remove "cookieName="
      // @todo Add validation that sessionId exists in users db
      cryptr = new Cryptr(sessionId);
      for (var i = 0; i < words.length; i++) {
        words[i].encrypted_word = cryptr.encrypt(words[i].word);
      }
    }
    res.send(JSON.stringify({'words': words}));
  });
});

// Helper endpoints
// curl http://localhost:3000/gamesapi/allwords
router.get('/allwords', function(req, res, next) {
  db.readCollection(config.gamesCollection, (results) => {
    res.send(results);
  });
});

module.exports = router;
