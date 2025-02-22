const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db.config');
const logger = require('../utils/logger');

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
      get() {
        const rawValue = this.getDataValue('content');
        try {
          return typeof rawValue === 'string' ? JSON.parse(rawValue) : rawValue;
        } catch (err) {
          logger.error('error parsing content', err)
          return rawValue;
        }
      },
      set(value) {
        this.setDataValue('content', typeof value === 'string' ? value : JSON.stringify(value));
      }
    }
  },
  {
    timestamps: true
  }
)

module.exports = Page