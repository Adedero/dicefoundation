const express = require('express');
const passport = require('../config/passport.config');
const argon2 = require('argon2');
const User = require('../models/user.model');
const { Op } = require("sequelize");
const logger = require('../utils/logger');

const router = express.Router();

// Register route
router.get('/register', async (req, res) => {
  const user = await User.findOne()

  if (user) {
    return res.redirect('/auth/login')
  }
  res.render('auth/register')
})

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email }})

    if (existingUser) {
      req.flash('error', 'An account with this email already exists.')
      return res.redirect('/auth/register')
    }
    const hash = await argon2.hash(password);

    const user = User.build({ name, email, password: hash })
    
    await user.save()

    req.flash('success', 'Registration successful. You can now log in.')
    res.redirect('/auth/login')
  } catch (err) {
    logger.error('Error registering user', err)
    req.flash('error', 'An error occurred. Please try again.')
    res.redirect('/auth/register')
  }
});


//LOG IN ROUTE
router.get('/login', (req, res) => {
  res.render('auth/login')
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      //return next(err);
      req.flash('error', err.message || 'Log in failed.');
      return res.redirect('/auth/login');
    }
    if (!user) {
      req.flash('error', info.message || 'Invalid credentials.');
      return res.redirect('/auth/login');
    }
    req.logIn(user, (err) => {
      if (err) {
        //return next(err);
        req.flash('error', err.message || 'Log in failed.');
        return res.redirect('/auth/login');
      }
      return res.redirect('/admin');
    });
  })(req, res, next);
});



// Logout route
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      req.flash('error', 'Error logging out.')
      return res.redirect(req.get('Referrer') || '/')
    }
    //req.flash('success_msg', 'Logout successful.')
    res.redirect('/')
  })
});

module.exports = router;