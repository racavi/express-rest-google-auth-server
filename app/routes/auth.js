const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');
const { verifyAccessJWT } = require('../middlewares/verify-access-jwt')
const { verifyRefreshJWT } = require('../middlewares/verify-refresh-jwt');

const { googleSignIn, authenticate, refresh_token } = require('../controllers/auth');

const router = Router();

router.post('/google/sign-in', [
    check('id_token', 'id_token is mandatory.').not().isEmpty(),
    validateFields
], googleSignIn);

router.get('/authenticate', [
    verifyAccessJWT,
], authenticate)

router.get('/refresh', [
    verifyRefreshJWT,
], refresh_token)

module.exports = router;