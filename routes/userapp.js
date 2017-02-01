const express = require('express');
const router = express.Router();

const mdb = require('./dbapi');
const db = new mdb.Database();

router.get('/allusers', function(req, res, next) {
  db.readCollection('users', (results) => {
  res.send(results);
  });
});

router.post('/login', function(req, res, next) {
  // Request should have a name
  if (!req.body.hasOwnProperty('name')
    || req.body['name'].length === 0) {
    res.status(400).send('Name not provided.');
  }
  
  if (req.body.hasOwnProperty('email')) {
    db.checkUserExists(req.body['email'], (result_id) => {
      if (result_id) return res.cookie('userid', result_id.toString()).send();
      createUser(req.body, res);
    });
  } else createUser(req.body, res);
});

let createUser = function(payload, res) {
  db.createUser(payload, (result_id) => {
    if (result_id) return res.cookie('userid', result_id.toString()).send();
    res.status(500).send('Error occurred in user creation.');  
  });
}

module.exports = router;
