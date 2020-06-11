const router = require('express').Router();
const {
  getComments,
  addComment,
  editComment,
  deleteComment,
} = require('../../../controllers/commentController');

const { requireAuth } = require('../../../middlewares/authMiddlewares');

// /api/comments/:commentID
router.route('/:commentID')
  .get(requireAuth, getComments)
  .post(requireAuth, addComment)
  .put(requireAuth, editComment)
  .delete(requireAuth, deleteComment);

module.exports = router;
