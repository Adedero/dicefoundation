const { Router } = require('express')
const router = Router()

const userRouter = require('./user.routes')
const authRouter = require('./auth.routes')
const adminRouter = require('./admin.routes')
const authenticate = require('../middleware/auth.middleware')

const routes = () => {
  
  router.use('', userRouter)
  router.use('/auth', authRouter)
  router.use('/admin', authenticate(),  adminRouter)

  return router
}

module.exports = routes