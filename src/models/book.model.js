const { DataTypes } = require('sequelize')
const { sequelize } = require("../config/db.config");

const Book = sequelize.define(
  'Book',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    slug: {
      type: DataTypes.STRING,
      unique: true
    },
    author: {
      type: DataTypes.STRING
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    language: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
    },
    featured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    publicationDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pages: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    howToGet: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true 
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true
    },
    coverImage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'PUBLISHED'
    },
    buyLinks: {
      type: DataTypes.JSON,
      allowNull: true,
    }
  },
  {
    timestamps: true
  }
)

module.exports = Book