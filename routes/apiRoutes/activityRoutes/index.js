const router = require('express').Router();
const {
  getActivities,
  addActivity,
  editActivity,
  deleteActivity,
  activityVote,

} = require('../../../controllers/activityController');

const { requireAuth } = require('../../../middlewares/authMiddlewares');


// /api/activity/:categoryID
router.route('/:categoryId')
  .get(requireAuth, getActivities)
  .post(requireAuth, addActivity);

// /api/activity/:activityID
router.route('/byId/:activityId')
  .put(requireAuth, editActivity)
  .delete(requireAuth, deleteActivity)
  .post(requireAuth, activityVote);

module.exports = router;
