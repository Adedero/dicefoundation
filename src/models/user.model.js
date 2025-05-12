const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db.config')

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255)
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    image: {
      //type: DataTypes.TEXT('long'),
      type: DataTypes.TEXT(),
      allowNull: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = User