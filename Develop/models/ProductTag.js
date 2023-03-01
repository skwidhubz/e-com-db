const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const ProductModel = require('./Product');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns

            id: {
              type: DataTypes.INTEGER, // Integer
              primaryKey: true, // Set as primary key
              allowNull: false, // Doesn't allow null values
              autoIncrement: true, // Uses auto increment
            },

            product_id: {
              type: DataTypes.INTEGER, // Integer
                  //References the product model's id
            },
            
            // Integer
            
            
            
            tag_id: {},
            
            // Integer
            
            // References the tag model's id



  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
