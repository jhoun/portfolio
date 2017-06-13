const express = require('express');
const router = express.Router();
const db = require('../models');
const User = db.User;


router.route('/')
.get((req, res) => {
  var path = req.baseUrl.slice(1);
  res.render('info/about', {user: req.user, path: path});
});

module.exports = router;