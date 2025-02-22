const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db.config')

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

module.exports = Setting