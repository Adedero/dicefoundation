const passport = require('../config/passport.config')
const User = require('../models/user.model')


const authenticate = () => {
  return (req, res, next) => {
    passport.authenticate('jwt', (err, user) => {
      if (err) {
        res.status(401).json({
          success: false,
          message: `Authentication failed: ${err.message}`
        })
        return
      }
      if (!user) {
        res.status(401).json({
          success: false,
          message: 'User not authorized'
        })
        return
      }
      req.user = { ...user }
      next()
    })(req, res, next)
  }
}

module.exports = authenticate