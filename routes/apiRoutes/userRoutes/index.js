const router = require('express').Router();
const {
  getUserByEmail,
  getUserData,
  addFriend,
  updateUser,
} = require('../../../controllers/userController');

const { requireAuth } = require('../../../middlewares/authMiddlewares');

// /api/user
router.route('/')
  .get(requireAuth, getUserData)
  .post(requireAuth, addFriend)
  .put(requireAuth, updateUser);

router.route('/email')
  .get(requireAuth, getUserByEmail);

module.exports = router;
