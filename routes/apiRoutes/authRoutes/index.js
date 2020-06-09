const router = require('express').Router();
const { signUp, signIn, getAllUserEmails } = require('../../../controllers/authController');
const { requireSignIn } = require('../../../middlewares/authMiddlewares');

router.post('/signUp', signUp);
router.post('/signIn', requireSignIn, signIn);

router.get('/emails', getAllUserEmails);

module.exports = router;
