const express = require('express');
const router = express.Router();
const passport = require('passport')

router.get('/', function(req, res, next) {
  res.render('pokedex/index', { title: 'Home Page' });
})

router.get('/auth/google', passport.authenticate(
  'google', 
  { scope: ['profile', 'email'] }
))

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
))

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/')
  })
})

module.exports = router;
