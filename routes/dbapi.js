const MongoClient = require('mongodb').MongoClient;
const autoIncrement = require("mongodb-autoincrement");
const dbUrl = 'mongodb://localhost:27017/guess';

var _db;
function db() {
  MongoClient.connect(dbUrl, function(err, database) {
    if (err) return console.log(err);
    _db = database;
  });
}

db.prototype.insertInCollection = function(collection, payload, callback) {
	// validate(req.body)
	var collec = _db.collection(collection);
	// Check if word already exists
	collec.find({word: payload.word}).toArray((err, results) => {
		if (err) return callback(this.handleInsertionError(err));
		if (results.length) return callback('Duplicate');
		
		autoIncrement.getNextSequence(_db, collection, (err, autoIndex) => {
			// Get auto incremented Id
			payload._id = autoIndex;
			collec.insert(payload, (err, result) => {
				if (err) return callback(this.handleInsertionError(err));
    		return callback('Saved');
			});
		});
	});
}

db.prototype.retrieveGamesFollowingId = function(collection, id, callback) {
	this.readCollection(collection, (results) => {
		var response = [];
		for(var i in results) {
			if (results[i]._id > id) response.push(results[i]);
		}
		callback(response);
	});
}

db.prototype.readCollection = function(collection, callback) {
  _db.collection(collection).find().toArray((err, results) => {
    if (err) return console.log(err);
    callback(results);
  });
}

db.prototype.handleInsertionError = function(err) {
	console.log(err);
	return 'Error';
}

module.exports = {
  database: db,
};