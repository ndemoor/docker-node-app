var express = require('express'),
    bodyParser = require('body-parser'),
    Memcached = require('memcached'),
    fs = require('fs');

// Constants
var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'production';
var logdir = process.env.LOG_DIR || '/var/data';
var mc = new Memcached(process.env.MEMCACHE || process.env.MC_PORT.replace('tcp://', ''));

// App
var app = express();
app.use(bodyParser.urlencoded({}));

// Root path
app.get('/', function (req, res) {
  res.send('Hello World!!\n');
});

// Myval path
app.post('/myval', function (req, res) {
  fs.appendFile(logdir + '/values.log', req.body.value + '\n', function (err) {});

  mc.set('foo', req.body.value, 3600, function (err) {
    if(err) {
      res.send('Could not set value\n', 500);
    } else {
      res.send('Value set!\n')
    }
  });
});

app.get('/myval', function (req, res) {
  mc.get('foo', function (err, data) {
    if(err) {
      res.send('Could not get value\n', 500);
    } else {
      res.send('Value = ' + data + '\n');
    }
  });
});

app.get('/crashme', function (req, res) {
  process.exit(1);
});

app.listen(port);

console.log('Running in ' + env + ' on http://localhost:' + port);
