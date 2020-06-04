const router = require('express').Router();
const {
  getUserTrips,
  deleteUserTripById,
  updateTripById,
  getAllUserEmails,
  addTrip,
} = require('../../../controllers/userController');

const { requireAuth } = require('../../../middlewares/authMiddlewares');

// /api/user/emails
router.get('/emails', getAllUserEmails);


// /api/user/trips
router.route('/trips')
  .get(requireAuth, getUserTrips)
  .post(requireAuth, addTrip);

// /api/user/emails

// /api/user/trips/:tripID
router.route('/trips/:tripId')
  .delete(requireAuth, deleteUserTripById)
  .put(requireAuth, updateTripById);

module.exports = router;
