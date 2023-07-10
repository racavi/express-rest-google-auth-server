const { request, response } = require('express');

const User = require('../models/user');

const { verifyGoogleIdToken } = require('../helpers/google-validators');


const googleSignIn = async(req=request, res=response) => {

    const { id_token } = req.body;

    try {
        const { mail } = await verifyGoogleIdToken(id_token);

        let user = await User.findOne({ mail });

        if ( !user ) {
            const user_data = {
                mail,
            }
            user = new User(user_data);
            await user.save();
        }

        res.json({
            uid: user._id
        });

    } catch (error) {
        console.log('Sign in with Google - ERROR:', error);
        res.status(400).json({
            msg: 'Could not verify Google ID Token.'
        })
    }
}

module.exports = {
    googleSignIn
}
