const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db.config')

const Page = sequelize.define(
  'Page',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      unique: true
    },
    content: {
      type: DataTypes.JSON,
    }
  },
  {
    timestamps: true
  }
)

module.exports = Page