var express = require('express');
var fileOne = {user: 'dougmuffinz', title: 'Man: Walking', filename: 'assets/img/sprite.png', id: '1'};
var fileTwo = {user: 'djx3', title: 'Man: Still Walking', filename: 'assets/img/sprite.png', id: '2'};
var models = [fileOne, fileTwo];

var animations = express.Router();

animations.route('/')
  .get(function(req, res) {
    res.render('animations/index', {files: models});
  });

animations.route('/:id')
  .get(function(req, res) {
    res.render('animations/show', {file: fileOne})
  });

module.exports = animations;