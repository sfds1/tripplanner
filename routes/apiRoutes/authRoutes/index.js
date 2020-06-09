const router = require('express').Router();
const { signUp, signIn, getAllUserEmails } = require('../../../controllers/authController');
const { requireSignIn } = require('../../../middlewares/authMiddlewares');

router.post('/signUp', signUp);
router.post('/signIn', requireSignIn, signIn);

// /api/auth/emails
router.get('/emails', getAllUserEmails);

module.exports = router;
