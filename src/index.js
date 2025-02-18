require('express-async-errors')
const express = require('express')
const helmet = require('helmet')
const routes = require('./routes')
const errorHandler = require('./middleware/error-handler')
const env = require('./utils/env')
const logger = require('./utils/logger')
const path = require('node:path')
const favicon = require('serve-favicon')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('./config/passport.config')
const { connectDB } = require('./config/db.config')

const { IS_PRODUCTION_ENV } = require('./utils/constants')

const PORT = process.env.PORT || 4321

connectDB()

const app = express()

if (IS_PRODUCTION_ENV) {
  app.set('trust proxy', '1')
  app.use(helmet.hidePoweredBy())
}
app.use(helmet())

app.use(session({
  secret: env.get('SESSION_SECRET', 'secret'),
  resave: false ,
  saveUninitialized: true,
  cookie: {
    secure: IS_PRODUCTION_ENV,
    rolling: false, 
    cookie: { maxAge: 60 * 60 * 1000 }
  }
}))

app.use(flash())

app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
  res.locals.info_msg = req.flash('info');
  res.locals.success_msg = req.flash('success');
  res.locals.error_msg = req.flash('error');
  res.locals.user = req.user;
  res.locals.isAuthenticated = req.isAuthenticated()
  next();
})

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(favicon(path.resolve('public', 'favicon.ico')))
app.use('/primeicons', express.static(path.resolve('node_modules', 'primeicons')));


app.set('view engine', 'ejs')
app.set('views', path.resolve('src/views'))

app.use(routes())
app.use(function(req, res) {
  res.status(404).render('not-found')
})
app.use(errorHandler)

app.listen(
  PORT,
  () => {
    logger.info(`Server running at http://localhost:${PORT}`)
  }
)

process.on('SIGINT', () => {
  logger.info('SIGINT signal received: closing HTTP server')
  process.exit(0)
})
