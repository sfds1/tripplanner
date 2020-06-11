const router = require('express').Router();
const {
  getUserByEmail,
} = require('../../../controllers/userController');

const { requireAuth } = require('../../../middlewares/authMiddlewares');

// /api/user
router.route('/')
  .get(requireAuth, getUserByEmail);

module.exports = router;
