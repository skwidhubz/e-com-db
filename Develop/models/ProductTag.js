const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns

            // id

            // Integer
            
            // Doesn't allow null values
            
            // Set as primary key
            
            // Uses auto increment
            
            // product_id
            
            // Integer
            
            // References the product model's id
            
            // tag_id
            
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
