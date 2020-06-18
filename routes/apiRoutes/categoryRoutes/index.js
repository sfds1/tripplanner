const router = require('express').Router();
const {
  getCategories,
  getCategoryById,
  addCategory,
  editCategory,
  deleteCategory,
} = require('../../../controllers/categoryController');

const { requireAuth } = require('../../../middlewares/authMiddlewares');


// /api/category/:tripId
router.route('/all/:tripId')
  .get(requireAuth, getCategories)
  .post(requireAuth, addCategory);

// /api/category/:categoryID
router.route('/byId/:categoryId')
  .get(requireAuth, getCategoryById)
  .put(requireAuth, editCategory)
  .delete(requireAuth, deleteCategory);

module.exports = router;
