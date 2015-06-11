var express = require('express');

var users = express.Router();

users.route('/')
  .get(function(req, res) {
    var user = { username: 'dougmuffinz', name: 'Doug Dougsby', avatar: 'assets/img/swirl.gif'};
    res.render('users/index', {user: user});
  });

module.exports = users;