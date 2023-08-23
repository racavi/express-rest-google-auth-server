const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');

const { checkUserMailAvailability } = require('../helpers/db-validators')

const { userRead, usersGet, usersPost } = require('../controllers/users');
const { verifyAccessJWT } = require('../middlewares/verify-access-jwt')

const router = Router();
router.get('/', usersGet);
router.post('/', [
    check('mail', 'Mail not valid').isEmail(),
    check('mail').custom( checkUserMailAvailability ),
    validateFields
], usersPost);
router.get('/:id', [
    verifyAccessJWT,
    validateFields,
], userRead);

module.exports = router;