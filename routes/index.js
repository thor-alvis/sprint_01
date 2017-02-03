const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res, next) => {
  res.render('index', {title: 'Home'})
});

 // show all blogs
router.get('/blogs', (req, res) => {
  res.render('index');
});

// make a new blog
router.post('/blogs', (req,res) => {
  var username = req.body.data.username;
  var title = req.body.data.posts.title;
  var content = req.body.data.posts.content;
  var item = {
          username: username,
          posts: {
            title: title,
            content: content
           }
        }


  var blog = new User(item)
  blog.save();
  res.redirect('/blogs');
});






module.exports = router
