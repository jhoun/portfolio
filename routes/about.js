const express = require('express');
const router = express.Router();
const db = require('../models');
const User = db.User;


router.route('/')
.get((req, res) => {
  res.render('info/about', {user: req.user});
});

module.exports = router;