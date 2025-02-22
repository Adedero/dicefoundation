const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db.config');
const logger = require('../utils/logger');

const Setting = sequelize.define(
  'Setting',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    emailAddress: {
      type: DataTypes.STRING,
      unique: true
    },
    socialMediaLinks: {
      type: DataTypes.JSON,
      allowNull: true,
    }
  },
  {
    timestamps: true
  }
)

module.exports = Setting