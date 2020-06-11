const { Trip, Category } = require('../models');

module.exports = {
  getCategories: async (req, res) => {
    const { tripId } = req.params;
    try {
      const categories = await Category.find({ trip: tripId });
      if (!categories) {
        return res.status(200).json({ error: 'No categories found' });
      }
      return res.json(categories);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  addCategory: async (req, res) => {
    const { tripId } = req.params;
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'You must provide text' });
    }
    try {
      const newCategory = await new Category({ title, categoryCreator: req.user._id, trip: tripId }).save();
      await Trip.findByIdAndUpdate(tripId, { $push: { categories: newCategory._id } });
      return res.status(200).json(newCategory);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  editCategory: async (req, res) => {
    const { categoryId } = req.params;
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'You must provide text' });
    }
    try {
      const categoryToEdit = await Category.findByIdAndUpdate(categoryId, { title });
      return res.status(200).json(categoryToEdit);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  deleteCategory: async (req, res) => {
    const { categoryId } = req.params;
    try {
      const categoryToDelete = await Category.findByIdAndDelete(categoryId);
      return res.status(200).json(categoryToDelete);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
