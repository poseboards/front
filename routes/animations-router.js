var express = require('express');
var fileOne = {user: 'djx3', title: 'Celery Man', filename: '../../celeryman.gif', id: '2'};
var fileTwo = {user: 'djx3', title: 'Super Engaged', filename: '../../4d3d3d.gif', id: '3'};
var fileThree = {user: 'djx3', title: 'Tayne', filename: '../../tayne.gif', id: '4'};
var fileFour = {user: 'djx3', title: 'Great Dancing', filename: '../../cinco.gif', id: '5'};
var fileFive = {user: 'djx3', title: 'Fashion', filename: '../../celeryparty.gif', id: '6'};
var fileSix = {user: 'dougmuffinz', title: 'Man: Walking', filename: '../assets/img/sprite.png', id: '1'};
var models = [fileOne, fileTwo, fileThree, fileFour, fileFive, fileSix];

var animations = express.Router();

animations.route('/')
  .get(function(req, res) {
    res.render('animations/index', {files: models});
  });

animations.route('/:id')
  .get(function(req, res) {
    res.render('animations/show', {file: fileFour})
  });

module.exports = animations;