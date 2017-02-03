const express = require('express')
const router = express.Router()
const User = require('../models/user')
// router.get('/', (req, res, next) => {
//   // respond with a resource
// })

// GET all blogs
router.get('/blogs', (req,res,next) => {
  User.find({})
  .then(users => res.json(users))
  .catch(next)
})
// post new blog
router.post('/blogs', (req,res,next) =>{
  const user = req.body.data.username;
  const post = req.body.data.post

  User.create(user)
})

// get blog/:id show a specific blog
router.get('/blogs/:id', (req,res,next) => {

})

// put blog/:id put it back
router.put('/blogs/:id',(req,res,next)=>{

})
// delete blog/:id  GONE.
router.delete('/blogs/:id',(req,res,next)=>{

})



module.exports = router
