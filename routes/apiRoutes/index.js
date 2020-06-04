const router = require('express').Router();
const tripRoutes = require('./tripRoutes');
const authRoutes = require('./authRoutes');
const userTripRoutes = require('./userTripRoutes');

router.use('/trips', tripRoutes);
router.use('/auth', authRoutes);
router.use('/user', userTripRoutes);

module.exports = router;
