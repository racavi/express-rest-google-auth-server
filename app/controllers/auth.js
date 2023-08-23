const { request, response } = require('express');

const User = require('../models/user');

const { verifyGoogleIdToken } = require('../helpers/google-validators');
const { generateJWT, generateRefreshJWT } = require('../helpers/jwt-generator');


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

        const access_token = await generateJWT(user._id);
        const refresh_token = await generateRefreshJWT(user._id)

        res.json({
            token: access_token,
            refresh_token
        });

    } catch (error) {
        console.log('Sign in with Google - ERROR:', error);
        res.status(400).json({
            message: 'Could not verify Google ID Token.'
        })
    }
}

// @desc Authenticates User via access token
// @route GET /api/v1/auth/authenticate
// @access Private - Valid Access JWT is required to use it
const authenticate = async(req=request, res=response) => {
    const id = req.uid;
    const { mail } = await User.findById(id).exec();

    if ( mail ) {
        return res.status(200).json({
            mail
        });
    }

    return res.status(401).json({
        message: 'Bad credentials'
    })
}

module.exports = {
    googleSignIn,
    authenticate,
}
