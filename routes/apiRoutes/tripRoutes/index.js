const router = require('express').Router();
const {
  getTrips,
  addTrip,
  addToTrip,
  deleteFromTrip,
  editTrip,
  deleteTrip,
  getTripById,

} = require('../../../controllers/tripController');

const { requireAuth } = require('../../../middlewares/authMiddlewares');


// /api/trip
router.route('/')
  .get(requireAuth, getTrips)
  .post(requireAuth, addTrip);

// /api/trip/:tripID
router.route('/:tripId')
  .get(requireAuth, getTripById)
  .put(requireAuth, addToTrip)
  // .put(requireAuth, deleteFromTrip)
  // .put(requireAuth, editTrip)
  .delete(requireAuth, deleteTrip);


module.exports = router;
