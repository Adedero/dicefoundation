require('express-async-errors')
const express = require('express')
const helmet = require('helmet')
const routes = require('./routes')
const errorHandler = require('./middleware/error-handler')
const env = require('./utils/env')
const logger = require('./utils/logger')
const path = require('node:path')
const favicon = require('serve-favicon')
const { connectDB } = require('./config/db.config')
const cors = require('cors')

const { IS_PRODUCTION_ENV } = require('./utils/constants')

const PORT = process.env.PORT || 4321

connectDB()

const app = express()

app.set('trust proxy', '1')
app.use(helmet.hidePoweredBy())

app.use(helmet())

app.use(cors({
  origin: env.get('CLIENT_URL')
}))

app.use(
  (req, res, next) => {
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin')
    next()
  },
  express.static('public')
)
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '20mb' }))

app.use(favicon(path.resolve('public', 'favicon.ico')))
app.use('/primeicons', express.static(path.resolve('node_modules', 'primeicons')));


app.set('view engine', 'ejs')
app.set('views', path.resolve('src/views'))

app.use(routes())

//Admin route
app.use(
  (req, res, next) => {
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin')
    next()
  },
  express.static('dist')
)
app.use('/admin', express.static('dist'));

app.get('/admin*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});


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
