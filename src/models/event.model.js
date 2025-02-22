const { DataTypes } = require('sequelize')
const { sequelize } = require("../config/db.config");

const Event = sequelize.define(
  'Event',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true
    },
    description: {
      type: DataTypes.TEXT
    },
    howToRegister: {
      type: DataTypes.TEXT,
      allowNull: true 
    },
    featured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'UPCOMING'
    },
    venue: {
      type: DataTypes.STRING
    },
    eventLink: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    bannerImage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gallery: {
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
    },
    registrationLink: {
      type: DataTypes.STRING,
      allowNull: true
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
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = Event