const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db.config')

const HomePage = sequelize.define(
  'HomePage',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING
    },
    largeText: {
      type: DataTypes.STRING
    },
    introduction: {
      type: DataTypes.TEXT
    },
    heroImage: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true
  }
)

module.exports = HomePage