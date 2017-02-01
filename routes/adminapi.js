const express = require('express');
const https = require('https');
const router = express.Router();
// const bodyParser = require('body-parser');

const mdb = require('./dbapi');
const db = new mdb.Database();
const gamesCollection = require('./config').gamesCollection;

// router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  res.send('Admin API server is running.');
});

router.get('/allgames', function(req, res, next) {
  db.readCollection(gamesCollection, (results) => {
  res.send(results);
  });
});

/* GET users listing. */
router.get('/search', (req, response, next) => {
	const options = {
		hostname: 'api.gettyimages.com',
		port: 443,
		path: '/v3/search/images?fields=id,title,thumb,referral_destinations&phrase='+ req.query.q +'&sort_order=best',
		method: 'GET',
		headers: {
			'Api-Key': '697wgfynhw53p7fzsw7dbder',
		},
	};

	const forwardRequest = https.request(options, (res) => {
		res.on('data', (data) => {
			data = JSON.parse(data);
			res.statusCode = 200;
			const resData = {
				word: req.query.q,
				images: [],
			};

			data.images.forEach((item) => {
				resData.images.push(item.display_sizes[0].uri);
			});

			response.setHeader('Content-type', 'application/json');
			response.send(JSON.stringify(resData));
		});
	});

	forwardRequest.on('error', (e) => {
		response.statusCode = 500;
		response.send(e);
	});
	forwardRequest.end();
});

router.post('/saveword', function(req, res) {
  let status = {
    'Saved': 200,
    'Duplicate': 400,
    'Error': 500,
  };
  // validate(req.body)
  db.checkWordExists(gamesCollection, req.body.word, (message) => {
    if (message === false) {
      db.insertInCollection(gamesCollection, req.body, (message) => {
        res.status(status[message]).send(message);
      });
    } else {
      res.status(status[message]).send(message);
    }
  });
});

module.exports = router;
