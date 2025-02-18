const { Sequelize } = require('sequelize')
const logger = require('../utils/logger')
const env = require('../utils/env')

const sequelize = new Sequelize({
  host: env.get('DB_HOST', 'localhost'),
  username: env.get('DB_USERNAME'),
  password: env.get('DB_PASSWORD'),
  database: env.get('DB_NAME'),
  dialect: 'postgres',
  logging: false
})

const connectDB = () => {
  sequelize.authenticate()
    .then(() => {
      logger.info('Database connected successfully')
      sequelize.sync({ alter: true })
    })
    .catch((err) => {
      logger.error('Unable to connect to the database', err)
    })
}

module.exports = {
  sequelize,
  connectDB
}