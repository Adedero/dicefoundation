const { Sequelize } = require('sequelize')
const logger = require('../utils/logger')
const env = require('../utils/env')
const path = require('node:path')
const fs = require('node:fs')

const sequelize = new Sequelize({
  host: env.get('DB_HOST'),
  port: env.get('DB_PORT'),
  username: env.get('DB_USERNAME'),
  password: env.get('DB_PASSWORD'),
  database: env.get('DB_NAME'),
  dialect: env.get('DB_DIALECT'),
  logging: false
})

const db = {}

const connectDB = () => {
  sequelize.authenticate()
    .then(() => {
      logger.info('Database connected successfully')
      sequelize.sync({ alter: true })
      loadModels(db)
      //console.log(db)
    })
    .catch((err) => {
      logger.error('Unable to connect to the database', err)
    })
}

function loadModels (database) {
  const modelsPath = path.resolve('src', 'models')
    const files = fs.readdirSync(modelsPath).filter(file => file.endsWith('model.js'))

  files.forEach((file) => {
    const modelFilePath = path.join(modelsPath, file)
    const modelModule = require(modelFilePath)
    // Get the exported model class (default export or named export)
    const modelClass = modelModule
    // Derive a key name for the model.
    // e.g., "user.model.js" becomes "User"
    let modelName = file.replace(/\.model\.js$/, '');
    modelName = modelName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    
    database[modelName] = modelClass
    //logger.info(`Loaded model: ${modelName}`)
  })
}

module.exports = {
  sequelize,
  connectDB,
  db
}