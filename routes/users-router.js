var express = require('express');
var userOne = {username: 'dougmuffinz', name: 'Doug Dougsby', avatar: 'assets/img/swirl.gif'};

var users = express.Router();

users.route('/')
  .get(function(req, res) {
    res.render('users/index', {user: userOne});
  });

users.route('/:username')
  .get(function(req, res) {
    res.render('users/show', {user: userOne})
  });

module.exports = users;