const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const fs = require('fs');
const userapp = require('./routes/userapp');
const adminapp = require('./routes/adminapp');
const adminapi = require('./routes/adminapi');
const gamesapi = require('./routes/gamesapi');
const compression = require('compression');
const app = express();
const fileRevs = require('./public/my-manifest.json');
const forceSSL = require('express-force-ssl');

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.set('etag', false);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(compression());

const cachingOption = (app.get('env') === 'development') ? {} :  { maxAge: '1y' };

app.use('/public', express.static(path.join(__dirname, 'public'), cachingOption));
app.use('/manifest', express.static(path.join(__dirname, 'manifest'), cachingOption));
app.use('/images', express.static(path.join(__dirname, 'images'), cachingOption));
app.use('/sw', express.static(path.join(__dirname, 'sw'), cachingOption));

app.use('/', userapp);
app.use('/adminapp', adminapp);
app.use('/adminapi', adminapi);
app.use('/gamesapi', gamesapi);

app.get('/sw.js',(req, res) => {
  res.sendFile(__dirname +'/sw.js');
})

//read userCss and inline it
const userCss = fs.readFileSync(__dirname + '/public' + fileRevs['userapp.css'].substr(fileRevs['userapp.css'].indexOf('/')) , 'utf8');
function serveIndex(req,res) {
  const isSafari = /^((?!chrome|android).)*safari/i.test(req.get('User-Agent'));
  if (app.get('env') === 'development') {
    const userCss = fs.readFileSync(__dirname + '/public' + fileRevs['userapp.css'].substr(fileRevs['userapp.css'].indexOf('/')) , 'utf8');
  } else {
    if (req.headers['x-forwarded-proto'] && req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect('https://' + req.headers.host + req.url);
    }
  }
  const renderOptions = {
    vendorjs: fileRevs['vendor.js'],
    userjs: fileRevs['userapp.js'],
    analyticsjs: fileRevs['analytics.js'],
    usercss: userCss,
  };
  if (isSafari) {
    renderOptions.addPolyfill=true;
  }
  res.render('userapp', renderOptions);
}

// app routes
app.get('/', serveIndex);
app.get('/play', serveIndex);

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
