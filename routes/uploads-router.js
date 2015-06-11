var express = require('express');
var uploadOne = {user: 'dougmuffinz', name: 'Man: Walking', avatar: 'assets/img/sprite.png'};

var uploads = express.Router();

uploads.route('/')
  .get(function(req, res) {
    res.render('uploads/index', {user: uploadOne});
  });