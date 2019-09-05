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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev'));

// Express Session: create object saved by backend for logged in user
app.use(session({
  secret: 'fromage',
  saveUninitialized: true,
  resave: true,
}))

// Passport init
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy ( 
  {usernameField: "email", passwordField:"password"},
  (email, password, done) => {
    controllers.getUserByEmail(email, (err, user) => {
      if (err) {
        console.log("err in getUserByEmail", err);
      }
      if (!user) {
        return done(null, false, {message: 'Unknown User. User not found'});
      }
      console.log("comparing input password: ", password)
      console.log("...to input user.password: ", user.password)
      controllers.comparePassword(password, user.password, function (err, isMatch){
        if (err) {
          console.log("err in comparePassword");
          return done(null, false);
        }
        if (isMatch) {
          console.log('its a match!')
          return done(null, user);
        } else {
          return done(null, false, { message: 'Invalid password' });
        }
      })
    })
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  controllers.getUserById(id, function(err, user) {
    done(err, user);
  });
});

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/success', (req, res) => {
  console.log(req.query)
  res.status(200).send(req.query.username);
});

app.get('/error', (req, res) => res.send("error logging in"));

app.post('/signup', (req, res) => {
  const password1 = req.body.password1;
  const password2 = req.body.password2;
  if (password1 === password2) {
    controllers.createUser(req, res);
  } else {
    res.send(`{error: 'Passwords don't match'}`).status(500);
  }
});

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/error'}), 
  (req, res) => {
    res.redirect('/success?username='+req.user.email);
  }
);

app.get('/logout', (req, res) => {
  req.logout();
  res.send(null);
})

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});