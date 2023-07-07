const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');

const { checkUserMailAvailability } = require('../helpers/db-validators')

const { usersGet, usersPost } = require('../controllers/users');

const router = Router();
router.get('/', usersGet);
router.post('/', [
    check('mail', 'Mail not valid').isEmail(),
    check('mail').custom( checkUserMailAvailability ),
    validateFields
], usersPost);

module.exports = router;