const { Category, Activity } = require('../models/index');

module.exports = {
  getActivities: async (req, res) => {
    const { categoryId } = req.params;
    try {
      const activities = await Activity.find({ category: categoryId });
      if (!activities) {
        return res.status(200).json({ error: 'No activities found' });
      }
      return res.json(activities);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  addActivity: async (req, res) => {
    const { categoryId } = req.params;
    const { title, details, date } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'You must provide text' });
    }
    try {
      const newActivity = await new Activity({ title, activityCreator: req.user._id, date, details }).save();
      await Category.findByIdAndUpdate(categoryId, { $push: { activities: newActivity._id } });
      return res.status(200).json(newActivity);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  editActivity: async (req, res) => {
    const { activityId } = req.params;
    const { title, details, date } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'You must provide text' });
    }
    try {
      const activityToEdit = await Activity.findByIdAndUpdate(activityId, { title, details, date });
      return res.status(200).json(activityToEdit);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  deleteActivity: async (req, res) => {
    const { activityId } = req.params;
    try {
      const activityToDelete = await Activity.findByIdAndDelete(activityId);
      return res.status(200).json(activityToDelete);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  // Can possibly be combined with editActivity controller
  // Where front end makes call only changing votes
  activityVote: async (req, res) => {
    const { activityId } = req.params;
    const { yesVote, noVote } = req.body;
    try {
      const votedActivity = await Activity.findByIdAndUpdate(activityId, { yesVote, noVote });
      return res.status(200).json(votedActivity);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
