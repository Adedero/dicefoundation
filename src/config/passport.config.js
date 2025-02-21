const passport = require('passport')
const { ExtractJwt, Strategy } = require('passport-jwt')
const User = require('../models/user.model')
const { verify } = require('argon2')
const env = require('../utils/env')

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: env.get('SECRET')
}

passport.use(
  new Strategy(jwtOptions, async (payload, done) => {
    try {
      const user = await User.findByPk(payload.id)
      
      if (!user) return done(null, false)
      //Add more fields as needed
      const authenticatedUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image
      }
      return done(null, authenticatedUser)
    } catch (err) {
      return done(err, false)
    }
  })
)

module.exports = passport 