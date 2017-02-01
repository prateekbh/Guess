const MongoClient = require('mongodb').MongoClient;
const autoIncrement = require('mongodb-autoincrement');
const dbUrl = 'mongodb://localhost:27017/guess';

let _db;

/**
 * MongoDB operations interface
 */
function db() {
  MongoClient.connect(dbUrl, function(err, database) {
    if (err) return console.log(err);
    _db = database;
  });
}

db.prototype.insertInCollection = function(collection, payload, callback) {
  let collec = _db.collection(collection);
  autoIncrement.getNextSequence(_db, collection, (err, autoIndex) => {
    // Get auto incremented Id
    payload._id = autoIndex;
    collec.insert(payload, (err, result) => {
      if (err) return callback(this.handleInsertionError(err));
      return callback('Saved');
    });
  });
};

db.prototype.checkWordExists = function(collection, words, callback) {
  let collec = _db.collection(collection);
  collec.find({word: words}).toArray((err, results) => {
    if (err) return callback(this.handleInsertionError(err));
    callback(results.length ? 'Duplicate' : false);
  });
}

db.prototype.retrieveGamesFollowingId = function(collection, id, callback) {
  this.readCollection(collection, (results) => {
    let response = [];
    for(let i in results) {
      if (results[i]._id > id) response.push(results[i]);
    }
    callback(response);
  });
};

db.prototype.readCollection = function(collection, callback) {
  _db.collection(collection).find().toArray((err, results) => {
    if (err) return console.log(err);
    callback(results);
  });
};

db.prototype.handleInsertionError = function(err, returnValue = 'Error') {
  console.log(err);
  return returnValue
};

module.exports = {
  Database: db,
};
