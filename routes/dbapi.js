const MongoClient = require('mongodb').MongoClient;
const autoIncrement = require('mongodb-autoincrement');
const dbUrl = 'mongodb://localhost:27017/guess';

const userCollection = 'users';
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

db.prototype.checkUserExists = function(email, callback) {
  _db.collection(userCollection).find({'email': email}).limit(1).toArray(function(err, results) {
    if (err) {
      console.log(err);
      return callback(false);
    }
    if (results.length) {
      console.log('User exists at _id: ' + results[0]._id);
      callback(results[0]._id);
    } else callback(false);
  });
}

db.prototype.createUser = function(payload, callback) {
  var user = {'name': payload['name']};
  if (payload.hasOwnProperty('email')) {
    user['email'] = payload['email'];
  }
  _db.collection(userCollection).insertOne(user, (err, result) => {
    if (err) {
      console.log(err);
      return callback(false);
    }
    console.log('User created at _id: ' + result.ops[0]._id);
    callback(result.ops[0]._id);
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
