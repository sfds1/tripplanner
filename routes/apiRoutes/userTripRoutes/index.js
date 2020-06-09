const router = require('express').Router();
const {
  addTrip,
  addToTrip,
  deleteFromTrip,
  editTrip,
  addCategory,
  editCategory,
  deleteCategory,
  addActivity,
  editActivity,
  deleteActivity,
  activityVote,
  addComment,
  editComment,
  deleteComment,
} = require('../../../controllers/userController');

const { requireAuth } = require('../../../middlewares/authMiddlewares');

// /api/user/profile
// router.get('/profile', getUser);

// /api/user/trips
router.route('/trips')
  // .get(requireAuth, getTrip)
  .post(requireAuth, addTrip);

// /api/user/trips/:tripID
router.route('/trips/:tripId')
  .put(requireAuth, addToTrip)
  .put(requireAuth, deleteFromTrip)
  .put(requireAuth, editTrip)
  .post(requireAuth, addCategory);

// /api/user/trips/:categoryID
router.route('/trips/:categoryId')
  .put(requireAuth, editCategory)
  .delete(requireAuth, deleteCategory)
  .post(requireAuth, addActivity);

// /api/user/trips/:activityID
router.route('/trips/:activityID')
  .put(requireAuth, editActivity)
  .delete(requireAuth, deleteActivity)
  .post(requireAuth, activityVote)
  .post(requireAuth, addComment);

// /api/user/trips/:commentID
router.route('/trips/:commentID')
  .put(requireAuth, editComment)
  .delete(requireAuth, deleteComment);

module.exports = router;
