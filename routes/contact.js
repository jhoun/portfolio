const express = require('express');
const router = express.Router();
const db = require('../models');
const User = db.User;


router.route('/')
.get((req, res) => {
  var path = req.baseUrl.slice(1).toLowerCase();
  res.render('info/contact', {user: req.user, path: path});
});

module.exports = router;