const express = require('express')
const router = express.Router()
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;


router.get('/', (req, res, next) => {
  res.render('index', {title: 'Home'})
})

router.post('/postData', function(req, res, next) {
  var item = {
    user: req.body.user,

  };
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('data').insertOne(item, function(err, result) {
      assert.equal(null, err);
      console.log('Item inserted' + item);
      db.close();
    });
  });

  res.redirect('/');
});

/* CREATE Data */
router.post('/', function(req, res, next) {
  var item = {
    Username: req.body.user,

  };

  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('data').insertOne(item, function(err, result) {
      assert.equal(null, err);
      console.log('Item inserted' + item);
      db.close();
    });
  });

  res.redirect('/');
});

// read data
router.get('/data', function(req, res, next) {
  var resultArray = [];
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    var dataFromDB = db.collection('data').find()
    dataFromDB.forEach(function(doc) {
      resultArray.push(doc);
    },
    function() {
      db.close();
      res.render('index', {items: resultArray});
    });
  });
});

// Comment
router.get('/comment/:id', function(req,res,next) {
var oId = new objectId(req.params.id)
  mongo.connect(url,function(err,db) {
    var record = db.collection('data').find({_id:oId}).toArray
    (function(err,items){
      db.close()
  res.render('update', {item: items[0], title:'Comments' } )

    })
  })
});
router.post('/comment/:id', function(req,res,next) {
  var oId = new objectId(req.params.id)
  mongo.connect(url, function(err,db) {
    assert.equal(null, err);
    db.collection('data').update({_id:oId},req.body);
    db.close();
    res.redirect('/data');
  console.log(oId, req.body);
});
});


module.exports = router
