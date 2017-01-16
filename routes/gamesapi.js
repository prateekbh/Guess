const express = require('express');
const router = express.Router();

const mdb = require('./dbapi');
const db = new mdb.Database();
const gamesCollection = require('./config').gamesCollection;

router.get('/', function(req, res, next) {
	res.send('Games server is running.');
});

// Return games with id following the id parameter
router.get('/:id', function(req, res, next) {
  db.retrieveGamesFollowingId(
    gamesCollection, parseInt(req.params['id']), (games) => {
      res.send(games);
  });
});

module.exports = router;
