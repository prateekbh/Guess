const mongodb = require('mongodb');
const config = require('./config');
const serverUtils = require('../utils/serverUtils');
const MongoClient = mongodb.MongoClient;
const gamesCollection = config.gamesCollection;
const userCollection = config.userCollection;
const dbUrl = config.mongoDbUrl;

let _db;

/**
 * MongoDB operations interface
 */
function db() {
  MongoClient.connect(dbUrl, function(err, database) {
    if (err) return serverUtils.log(err);
    _db = database;
  });
}

db.prototype.checkUserExists = function(email, callback) {
  _db.collection(userCollection).find({'email': email}).limit(1)
    .toArray(function(err, results) {
    if (err) {
      serverUtils.log(err);
      return callback(false);
    }
    if (results.length) {
      serverUtils.log('User exists at _id: ' + results[0]._id);
      callback(results[0]._id, results[0]['name']);
    } else callback(false);
  });
}

db.prototype.createUser = function(name, email, callback) {
  var user = {'name': name};
  if (typeof email !== 'undefined') {
    user['email'] = email;
  }
  _db.collection(userCollection).insertOne(user, (err, result) => {
    if (err) {
      serverUtils.log(err);
      return callback(false);
    }
    serverUtils.log('User created at _id: ' + result.ops[0]['_id']);
    callback(result.ops[0]['_id'], result.ops[0]['name']);
  });
}

db.prototype.getUser = function(id, callback) {
  _db.collection(userCollection).find({'_id': mongodb.ObjectID(id)})
    .limit(1).toArray(function(err, results) {
    if (err) {
      serverUtils.log(err);
      return callback(false);
    }
    if (results.length) {
      serverUtils.log('User exists at _id: ' + results[0]._id);
      callback(results[0]);
    } else callback('No User.');
  });
}

db.prototype.recordGameStats = function(userId, payload, callback) {
  _db.collection(userCollection).findOne({'_id': mongodb.ObjectID(userId)},
  (err, userDoc) => {
    serverUtils.log(userDoc);
    if (!userDoc.hasOwnProperty('word_data')) {
      // No stats as yet, simply set the word_data
      userDoc['word_data'] = payload['word_data'];
      userDoc['level'] = payload['word_data'].length;
    } else {
      // Words IDs for which the stat is recorded by now
      var userWords = new Set();
      userDoc['word_data'].forEach((entry) => {
        userWords.add(entry['word_id'])
      });

      for (var index in payload['word_data']) {
        entry = payload['word_data'][index];
        if (!userWords.has(entry['word_id'])) {
          userDoc['word_data'].push(entry);
          userWords.add(entry['word_id']);
          userDoc['level'] += 1;
        }
      }
    }

    // Update the document now
    _db.collection(userCollection).update({'_id': mongodb.ObjectID(userId)}, userDoc,
    (err, result) => {
      if (err) {
        serverUtils.log(err);
        return callback(false);
      }
      callback(true);
    });
  });
}

db.prototype.insertWordInCollection = function(payload, callback) {
  _db.collection(gamesCollection).insert(payload, (err, result) => {
    if (err) return callback(this.handleInsertionError(err));
    return callback('Saved');
  });
};

db.prototype.checkWordExists = function(words, callback) {
  _db.collection(gamesCollection).find({word: words}).toArray((err, results) => {
    if (err) return callback(this.handleInsertionError(err));
    callback(results.length ? 'Duplicate' : false);
  });
}

db.prototype.getRandomWords = function(numWords, callback) {
  _db.collection(gamesCollection).aggregate([{ $sample: {size: numWords}}],
    (err, result) => {
      if (err) {
        serverUtils.log(err);
        return callback(false);
      }
      serverUtils.log(result);
      callback(result);
    }
  );
}

db.prototype.readCollection = function(collection, callback) {
  _db.collection(collection).find().toArray((err, results) => {
    if (err) return serverUtils.log(err);
    callback(results);
  });
};

db.prototype.handleInsertionError = function(err, returnValue = 'Error') {
  serverUtils.log(err);
  return returnValue
};

module.exports = {
  Database: db,
};
