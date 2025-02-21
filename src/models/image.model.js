const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db.config')

const Image = sequelize.define(
  'Image',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      unique: true
    },
  },
  {
    timestamps: true
  }
)

module.exports = Image