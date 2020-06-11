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
  getUserData: async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
      return res.status(200).json(user);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
