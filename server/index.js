const express = require('express');
const app = express();
const port = 4000;
const morgan = require('morgan');
const path = require('path');
// const db = require('../database/index.js');
const db = require('../database2/index.js');
const controllers = require('./controllers/index');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(morgan('dev'));
// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express Session
app.use(session({
  secret: 'fromage',
  saveUninitialized: true,
  resave: true,
}))

// Passport init
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy ((email, password, done) => {
  User.controllers.getUserByEmail(email, (err, user) => {
    if (err) {
      console.log("err in getUserByEmail", err);
    }
    User.controllers.comparePassword(password, user.password, (err, isMatch) => {
      if (err) {
        console.log("err in comparePassword");
      }
      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, {message: 'Invalid password'});
      }
    })
  })
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/test', (req, res) => {
  res.send(`hello from get ${port}`).status(200);
});

// app.post('/signup', controllers.createUser);
app.post('/signup', (req, res) => {
  const password1 = req.body.password1;
  const password2 = req.body.password2;
  console.log('password1', req.body.password1)
  console.log('password2', req.body.password2)

  if (password1 === password2) {
    controllers.createUser(req, res);
  } else {
    res.send(`{errors: 'Passwords don't match'}`).status(500);
  }
});

// Endpoint to login
app.post('/login', passport.authenticate('local'), (req, res) => {
    res.send(req.user);
  }
);

// Endpoint to get current user
app.get('/user', (req, res) => {
  res.send(req.user);
})

// Endpoint to logout
app.get('/logout', (req, res) => {
  req.logout();
  res.send(null);
})

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});