const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// Find all possible categories
router.get('/', async (req, res) => {
try{
  const categoryData = await Category.findAll({
    include:[{model: Product}],
  });
  res.status(200).json(categoryData);
} catch(err) {
  res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
try{
  const categoryData = await categoryData.findByPk(req.params.id, {
    include: [{model: Product}],
  });
  if (!categoryData) {
    res.status(404).json({ message: 'no category product found with that id!'});
    return;
  }

  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});

router.post('/', async (req, res) => {
  try{
    const categoryData = await Category.create({
      product_id: req.body.product_id,
    });
res.status(200).json(categoryData);
  } catch(err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(
      {
        // Update the properties of the category based on the request body
        // For example, if you have a 'category_name' property, you can update it like this:
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id, // Update the category with the specified ID
        },
      }
    );
    if (categoryData[0] === 0) {
      res.status(404).json({ message: 'No category found with that ID!' });
      return;
    }
    res.status(200).json({ message: 'Category updated successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id, // Delete the category with the specified ID
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that ID!' });
      return;
    }
    res.status(200).json({ message: 'Category deleted successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
