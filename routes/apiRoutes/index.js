const router = require('express').Router();
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const tripRoutes = require('./tripRoutes');
const categoryRoutes = require('./categoryRoutes');
const activityRoutes = require('./activityRoutes');
const commentRoutes = require('./commentRoutes');


router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/trip', tripRoutes);
router.use('/category', categoryRoutes);
router.use('/activity', activityRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
