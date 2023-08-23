const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');
const { verifyAccessJWT } = require('../middlewares/verify-access-jwt')

const { googleSignIn, authenticate } = require('../controllers/auth');

const router = Router();

router.post('/google/sign-in', [
    check('id_token', 'id_token is mandatory.').not().isEmpty(),
    validateFields
], googleSignIn);

router.get('/authenticate', [
    verifyAccessJWT,
], authenticate)

module.exports = router;