const { User, Trip, Category, Activity, Comment } = require('../models/index');

module.exports = {
  addTrip: async (req, res) => {
    const { title, startDate, endDate, location } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'You must provide text' });
    }
    try {
      const newTrip = await new Trip({
        title,
        startDate,
        endDate,
        location,
        users: [{ admin: true, user: req.user._id }],
      }).save();
      req.user.trips.push({ admin: true, newTrip });
      return res.status(200).json(newTrip);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  addToTrip: async (req, res) => {
    const { tripId } = req.params;
    const { friendId } = req.body;
    try {
      const tripToAddTo = await Trip.findByIdAndUpdate(tripId,
        { $push: { users: { friendId } } },
        { new: true });
      return res.json(tripToAddTo);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  deleteFromTrip: async (req, res) => {
    const { tripId } = req.params;
    const { friendId } = req.body;
    try {
      const tripToDeleteFrom = await Trip.findByIdAndUpdate(tripId,
        { $pull: { users: { friendId } } },
        { new: true });
      return res.json(tripToDeleteFrom);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  editTrip: async (req, res) => {
    const { tripId } = req.params;
    const { title, startDate, endDate, location } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'You must provide text' });
    }
    try {
      const tripToEdit = await Trip.findByIdAndUpdate(tripId, {
        title, startDate, endDate, location,
      }, { new: true });
      return res.json(tripToEdit);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  addCategory: async (req, res) => {
    const { tripId } = req.params;
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'You must provide text' });
    }
    try {
      const newCategory = await new Category({ title, categoryCreator: req.user._id, trip: tripId }).save();
      await Trip.findByIdAndUpdate(tripId, { $push: { categories: newCategory._id } });
      return res.status(200).json(newCategory);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  editCategory: async (req, res) => {
    const { categoryId } = req.params;
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'You must provide text' });
    }
    try {
      const categoryToEdit = await Category.findByIdAndUpdate(categoryId, { title });
      return res.status(200).json(categoryToEdit);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  deleteCategory: async (req, res) => {
    const { categoryId } = req.params;
    try {
      const categoryToDelete = await Category.findByIdAndDelete(categoryId);
      return res.status(200).json(categoryToDelete);
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
      await Category.findByIdAndUpdate(categoryId, { $push: { categories: newActivity._id } });
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
  // addActivity,
  // addComment,

};
