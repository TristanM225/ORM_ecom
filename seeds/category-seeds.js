const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts', // category 1
  },
  {
    category_name: 'Shorts', // category 2
  },
  {
    category_name: 'Music', // category 3
  },
  {
    category_name: 'Hats', // category 4
  },
  {
    category_name: 'Shoes', // category 5
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
