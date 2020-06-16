const { User } = require('../models');

module.exports = {
  getUserByEmail: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.query.email });
      return res.status(200).json(user);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getUserData: (req, res) => res.json(req.user),

  addFriend: (req, res) => {
    const friend = req.body;
    req.user.friends.push(friend);
    req.user.save();
    return res.status(200).json(req.user);
  },

  updateUser: async (req, res) => {
    //   Grab userId from params
    const { userId } = req.params;
    //  grab text and completed from the database
    const { email, password, name } = req.body;
    try {
      const userToUpdate = await User.findById(userId);
      if (!userToUpdate) {
        return res.status(401).json({ error: 'No user with that Id' });
      }
      if (req.user._id.toString() !== userToUpdate.user.toString()) {
        return res.status(401).json({ error: "You cannot update a profile that's not yours." });
      }
      const updatedUser = await User.findByIdAndUpdate(userId,
        { email, password, name },
        { new: true });
      return res.json(updatedUser);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
