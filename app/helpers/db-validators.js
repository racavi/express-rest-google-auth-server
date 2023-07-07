const User = require('../models/user');

const checkUserMailAvailability = async( mail = '' ) => {
    // Verify wheter requested user mail is available
    const userBoundToEmail = await User.findOne({ mail });
    if ( userBoundToEmail ) {
        throw new Error(`Mail '${ mail }' already in use.`);
    }
}

module.exports = {
    checkUserMailAvailability,
}