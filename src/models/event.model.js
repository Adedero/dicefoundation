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
      type: DataTypes.TIME,
      allowNull: true
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    mapLink: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bannerImage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gallery: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    registrationLink: {
      type: DataTypes.STRING,
      allowNull: true
    },
    socialMediaLinks: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true
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