// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

Product.belongsToMany(Tag, {
  through: ProductTag, 
  foreignKey: 'product_id'
});

// A Category has many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', 
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
