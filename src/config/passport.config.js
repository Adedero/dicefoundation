const passport = require('passport')
const User = require('../models/user.model')
const LocalStrategy = require('passport-local').Strategy
const { verify } = require('argon2')

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done,) => {
      try {
        if (!password) {
          return done(null, false, { message: 'Password is required.' })
        }

        if (password.length < 6) {
          return done(null, false, { message: 'Password must contain 6 characters or more.' })
        }
        
        const user = await User.findOne({ where: { email } })

        if (!user) {
          return done(null, false, { message: 'Invalid credentials.' })
        }

        const isMatch = await verify(user.password, password)

        if (!isMatch) {
          return done(null, false, { message: 'Invalid credentials.' })
        }

        return done(null, user)
      } catch (error) {
        return done(error)
      }
    }
  )
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})


passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
})

module.exports = passport 