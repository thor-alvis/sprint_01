var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
   // created: Date,
   title: String,
   content: String
   // likes: Number
});


var UserSchema = new mongoose.Schema({
  username: String,
  posts:[PostSchema]

})

module.exports = mongoose.model('User', UserSchema)
