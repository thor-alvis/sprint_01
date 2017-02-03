const express = require('express')
const router = express.Router()
const User = require('')

router.get('/', (req, res, next) => {
  res.render('index', {title: 'Home'})
})

router.post('/blog/:id', (err, res) => {
  var username = req.body.username;
  var post = req.body.post;
  var data = new UserData
})



module.exports = router
