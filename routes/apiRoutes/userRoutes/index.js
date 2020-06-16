const router = require('express').Router();
const {
  getUserByEmail,
  getUserData,
  addFriend,
} = require('../../../controllers/userController');

const { requireAuth } = require('../../../middlewares/authMiddlewares');

// /api/user
router.route('/')
  .get(requireAuth, getUserData)
  .post(requireAuth, addFriend);

router.route('/email')
  .get(requireAuth, getUserByEmail);

module.exports = router;
