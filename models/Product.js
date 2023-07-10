// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true, // Reserch this line, need to validate value is decimal
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 10, // need to check and see if this actually sets default value as 10
      validate: {
        isNumber: true, // Reserch this line, need to validate value is Number
      },
    },
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

// Establish the association between Product and Category models
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

module.exports = Product;
