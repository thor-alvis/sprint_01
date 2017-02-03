const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res, next) => {
  res.render('index', {title: 'Home'})
});

 // show all blogs
router.get('/blogs', function (req, res, next) {
  res.send('show all');
});

// make a new blog
router.post('/blogs', (req,res)=> {
});






module.exports = router;
