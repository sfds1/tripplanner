const router = require('express').Router();
const {
  getUserByEmail,
  getUserData,
} = require('../../../controllers/userController');

const { requireAuth } = require('../../../middlewares/authMiddlewares');

// /api/user
router.route('/')
  .get(requireAuth, getUserData);

router.route('/email')
  .get(requireAuth, getUserByEmail);

module.exports = router;
