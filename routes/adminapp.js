const express = require('express');
const router = express.Router();
const fileRevs = require('./public/my-manifest.json');

/* GET users listing. */
router.get('/', (req, res) => {
	res.render('adminapp', {
		vendorjs: fileRevs['vendor.js'],
		adminjs: fileRevs['adminapp.js'],
		admincss: fileRevs['adminapp.css'],
	});
});

module.exports = router;
