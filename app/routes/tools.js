const { Router } = require('express');

const { verifyAccessJWT } = require('../middlewares/verify-access-jwt')

const { loadTools } = require('../controllers/tools');


const router = Router();

router.use(verifyAccessJWT);

router.route('/')
    .get(loadTools);

module.exports = router;