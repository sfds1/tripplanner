const { User, Trip } = require('../models/index');

module.exports = {
  addTrip: async (req, res) => {
    const { name, startDate, endDate, location } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'You must provide text' });
    }
    try {
      const newTrip = await new Trip({
        name,
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
    const { name, startDate, endDate, location } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'You must provide text' });
    }
    try {
      const tripToEdit = await Trip.findByIdAndUpdate(tripId, {
        name, startDate, endDate, location,
      }, { new: true });
      return res.json(tripToEdit);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  addCategory,
  addActivity,
  addComment,



  addTodo: async (req, res) => {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'You must provide text' });
    }
    try {
      const newTodo = await new Todo({ text, user: req.user._id }).save();
      // const newTodo = await Todo.create({ text, user: req.user._id });
      req.user.todos.push(newTodo);
      await req.user.save();
      return res.status(200).json(newTodo);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getAllUserEmails: async (req, res) => {
    try {
      const userEmail = await User.findOne({ email: req.query.email }, 'email');
      return res.status(200).json(userEmail);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getUserTodos: async (req, res) => {
    try {
      const todos = await Todo.find({ user: req.user._id });
      return res.json(todos);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  deleteUserTodoById: async (req, res) => {
    // grab todoId from req.params
    const { todoId } = req.params;
    try {
      // First find the todo by Id
      const todoToDelete = await Todo.findById(todoId);
      if (!todoToDelete) {
        return res.status(401).json({ error: 'No todo with that Id' });
      }
      // Check if the todo does not belong to the user.
      // if it doesnt, do not allow the user to delete it
      if (req.user._id.toString() !== todoToDelete.user.toString()) {
        return res.status(401).json({ error: "You cannot delete a todo that's not yours" });
      }
      //  otherwise, delete the todo
      const deletedTodo = await Todo.findByIdAndDelete(todoId);
      // Respond back with the deleted todo
      return res.json(deletedTodo);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  updateTodoById: async (req, res) => {
  //   Grab todoId from params
    const { todoId } = req.params;
    //  grab text and completed from the database
    const { text, completed } = req.body;
    try {
      const todoToUpdate = await Todo.findById(todoId);
      if (!todoToUpdate) {
        return res.status(401).json({ error: 'No todo with that Id'});
      }
      if (req.user._id.toString() !== todoToUpdate.user.toString()) {
        return res.status(401).json({ error: "You cannot update a todo that's not yours" });
      }
      const updatedTodo = await Todo.findByIdAndUpdate(todoId,
        { completed, text },
        { new: true });
      return res.json(updatedTodo);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
