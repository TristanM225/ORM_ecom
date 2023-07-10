// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',

})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',

})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  through: 'product_tag', // Name of the join table
  foreignKey: 'product_id', // Foreign key in the join table referencing the Product model
  otherKey: 'tag_id',

})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  through: 'product_tag', // Name of the join table
  foreignKey: 'product_id', // Foreign key in the join table referencing the Product model
  otherKey: 'tag_id',


})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
