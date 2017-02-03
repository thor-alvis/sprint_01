console.log('hello from blog.js');

const express = require('express');
const router = express.Router();
const request = require('request');

// router.get('/', (req, res, next) => {
//   const access_token = req.session.access_token;
//   console.log('access token is getting passed through', access_token);
//   const url = 'https://api.github.com/user'
//   const options = {
//     method: 'GET',
//     url: url,
//     headers: {
//       'Authorization' : `token ${access_token}`,
//       'User-Agent' : 'thor-alvis',
//     }
//   }
//   console.log('getting the profile...')

//   request(options, (err, response, body) => {
//     const user = JSON.parse(body);
//     // console.log('here is the user data ', user);
//     // store user in session
//     // redirect to /blog/username
//     // const username = user.login
//     console.log('username is =>', user.login)
//     res.render('user', {user: user});
//   });
// });

router.get('/me', (req, res, next) => {
  const access_token = req.session.access_token;
  console.log('token is getting passed from /me', access_token);
  const url = 'https://api.github.com/user'
  const options = {
    method: 'GET',
    url: url,
    headers: {
      'Authorization' : `token ${access_token}`,
      'User-Agent' : 'thor-alvis',
    }
  }
  request(options, (err, response, body) => {
    const user = JSON.parse(body);
    req.session.user = user
    username = user.login
    // console.log('+++++USERNAME =====>', username)
    return res.redirect('/blog/')
  })
})

router.get('/', (req, res, next) => {
  const user = req.session.user;
  username = user.login
  console.log('USERNAME =>', username)
  res.render('user', {user: user});
})



module.exports = router;
