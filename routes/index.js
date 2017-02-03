const express = require('express')
const router = express.Router()
const User = require('')

router.get('/', (req, res, next) => {
  res.render('index', {title: 'Home'})
})



module.exports = router
