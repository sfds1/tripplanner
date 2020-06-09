const { Activity, Comment } = require('../models');

// Currently anyone can edit,
// Add if statments to check userId = activityCreator to only allow creator to edit
// for each add controller, save what's being added to the user
// Ex.) user.findByIdAndUpdate or req.user.categories.push
module.exports = {
  getComments: async (req, res) => {
    const { activityId } = req.params;
    try {
      const categories = await Comment.find({ trip: activityId });
      if (!categories) {
        return res.status(200).json({ error: 'No categories found' });
      }
      return res.json(categories);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  addComment: async (req, res) => {
    const { activityId } = req.params;
    const { details } = req.body;
    if (!details) {
      return res.status(400).json({ error: 'You must provide text' });
    }
    try {
      const newComment = await new Comment({ activityCreator: req.user._id, details }).save();
      await Activity.findByIdAndUpdate(activityId, { $push: { comments: newComment._id } });
      return res.status(200).json(newComment);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  editComment: async (req, res) => {
    const { commentId } = req.params;
    const { details } = req.body;
    if (!details) {
      return res.status(400).json({ error: 'You must provide text' });
    }
    try {
      const commentToEdit = await Comment.findByIdAndUpdate(commentId, { details });
      return res.status(200).json(commentToEdit);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  deleteComment: async (req, res) => {
    const { commentId } = req.params;
    try {
      const commentToDelete = await Comment.findByIdAndDelete(commentId);
      return res.status(200).json(commentToDelete);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
