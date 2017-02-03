require('dotenv').config()
const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const session = require('express-session')
const hbs = require('express-handlebars')
const methodOverride = require('method-override')
const morgan = require('morgan')
const path = require('path')
const app = express()
// CONFIG
require('./db/config')
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(favicon(path.join(__dirname, 'public/favicon.ico')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: true}))
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views/layouts/')}))
app.set('view engine', 'hbs')
// ROUTES
app.use('/', require('./routes/index'))
app.use('/example', require('./routes/example'))
app.use(require('./routes/error'))
// use the user Schema in models folders
const User = require('./models/user.js');

const user2 = new User({
  username: 'bklklklk',
  posts: [{created:  ('05-03-2018'),
           title: 'i li',
           content: 'holllla son!',
           // likes: 7
         }]
})
user2.save();
console.log('user2 now =  ',user2);


const user4 = new User({
  username: 'sdsjk',
  posts: [{created: Date(),
           title: 'Im here to code',
           content: 'This is my post its reallly cool'
        }]
})
user4.save();
console.log('user4 =', user4);




const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
