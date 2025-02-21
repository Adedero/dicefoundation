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
      type: DataTypes.TEXT
    },
    email: {
      type: DataTypes.TEXT,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
    },
    resetPasswordToken: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    resetPasswordExpire: {
      type: DataTypes.DATE,
      allowNull: true
    },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = User