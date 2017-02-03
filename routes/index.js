
console.log('hello from index.js')
const request = require('request');
const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.get('/', (req, res, next) => {
  res.render('index', {title: 'Home'})
});

 // ++++++++++++++++++                      ++++++++++++++++++ //
// ++++++++++++++++++ OAUTH ROUTING BEGINs ++++++++++++++++++ //
// ++++++++++++++++++                      ++++++++++++++++++ //

const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;
const redirect_uri = 'http://127.0.0.1:3000/authorize';

// REDIRECTS TO GITHUB OAUTH
router.get('/login', (req, res, next) => {
  const redirect_url = 'https://github.com/login/oauth/authorize';
  const scope = 'user';
  const state = 'dog';
  const queryParams = `client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}`
  res.redirect(redirect_url + '?' + queryParams);
});

router.get('/authorize', (req, res, next) => {
  const code = req.query.code;
  console.log('get /authorize - code =>', code);
  const data = {
    client_id: client_id,
    client_secret: client_secret,
    code: code,
    redirect_uri: redirect_uri,
    state: req.query.state
  }
  console.log('get /authorize - data =>', data);
  const options = {
    method: 'POST',
    url: 'https://github.com/login/oauth/access_token',
    headers: { 'Accept' : 'application/json'},
    json: data
  }
  console.log('get /authorize - options =>', options);
  request(options, (err, response, body) => {
    req.session.access_token = body.access_token;
    console.log('body => ', body);
    res.redirect('/blog/me')
  })
>>>>>>> 589354f6423e7f8e723e4df50f9d9a19eb573109
})

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
            date: Date(),
            title: title,
            content: content
           }
        }


  var blog = new User(item)
  blog.save();
  res.redirect('/blogs');
});

// ADD LOGOUT ROUTE HERE
router.get('/logout', (req, res) => {
  req.session.destroy( () => {
    res.redirect('/');
  })
})

// ++++++++++++++++++                    ++++++++++++++++++ //
// ++++++++++++++++++ OAUTH ROUTING ENDS ++++++++++++++++++ //
// ++++++++++++++++++                    ++++++++++++++++++ //


module.exports = router;
