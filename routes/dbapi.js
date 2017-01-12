const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017/exjs';

var _db;
function db() {
  MongoClient.connect(dbUrl, function(err, database) {
    if (err) return console.log(err);
    _db = database;
  });
}

db.prototype.insertInCollection = function(collection, payload, callback) {
  _db.collection(collection).save(payload, (err, result) => {
    if (err) return console.log(err);
    // console.log('saved to database');
    callback(payload);
  });
}

db.prototype.readCollection = function(collection, callback) {
  _db.collection(collection).find().toArray((err, results) => {
    if (err) return console.log(err);
    callback(results);
  });
}

module.exports = {
  database: db,
};