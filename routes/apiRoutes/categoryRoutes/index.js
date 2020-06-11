const router = require('express').Router();
const {
  getCategories,
  addCategory,
  editCategory,
  deleteCategory,
} = require('../../../controllers/categoryController');

const { requireAuth } = require('../../../middlewares/authMiddlewares');


// /api/category/:tripId
router.route('/:tripId')
  .get(requireAuth, getCategories)
  .post(requireAuth, addCategory);

// /api/category/:categoryID
router.route('/:categoryId')
  .put(requireAuth, editCategory)
  .delete(requireAuth, deleteCategory);

module.exports = router;
