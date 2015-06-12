var express = require('express');

var dev = express.Router();

dev.route('/')
  .get(function(req, res) {
    res.render('dev/style-guide');
  });

module.exports = dev;