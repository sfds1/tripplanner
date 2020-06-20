const { User, Trip } = require('../models');

module.exports = {
  getTrips: async (req, res) => {
    try {
      const trips = await Trip.find({ users: { $elemMatch: { user: req.user._id } } })
      if (!trips) {
        return res.status(200).json({ error: 'No trips found' });
      }
      return res.status(200).json(trips);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getTripById: async (req, res) => {
    const { tripId } = req.params;
    try {
      const trip = await Trip.findById(tripId).populate('categories', 'users');
      return res.status(200).json(trip);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  addTrip: async (req, res) => {
    const { title, city, startDate, endDate, location } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'You must provide text' });
    }
    try {
      const newTrip = await Trip.create({
        title,
        city,
        startDate,
        endDate,
        location,
        users: [],
      });
      newTrip.users.push(req.user._id);
      await newTrip.save();
      req.user.trips.push({ admin: true, newTrip });
      await req.user.save();
      return res.status(200).json(newTrip);
    } catch (e) {
      console.log(e)
      return res.status(403).json({ e });
    }
  },
  addToTrip: async (req, res) => {
    const { tripId } = req.params;
    const { friendId } = req.body;
    try {
      const tripToAddTo = await Trip.findById(tripId);
      tripToAddTo.users.push(friendId);
      await tripToAddTo.save();
      await User.findByIdAndUpdate(friendId, { $push: { trips: tripId } });
      return res.json(tripToAddTo);
    } catch (e) {
      console.log(e)
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
    const { title, city, startDate, endDate, location } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'You must provide text' });
    }
    try {
      const tripToEdit = await Trip.findByIdAndUpdate(tripId, {
        title, city, startDate, endDate, location,
      }, { new: true });
      return res.json(tripToEdit);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  deleteTrip: async (req, res) => {
    const { tripId } = req.params;
    try {
      const tripToDelete = await Trip.findByIdAndDelete(tripId);
      return res.status(200).json(tripToDelete);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
