const express = require('express');
const router = express.Router();

const mdb = require('./dbapi');
const db = new mdb.Database();
const config = require('./config');

router.get('/', function(req, res, next) {
  res.send('Games server is running.');
});

// curl http://localhost:3000/gamesapi/randomwords
router.get('/randomwords', function(req, res, next) {
  db.getRandomWords(config.WORD_COUNT, (words) => {
      if (words) res.send(JSON.stringify({'words': words}));
      else res.status(500).send('Error occurred.')
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
