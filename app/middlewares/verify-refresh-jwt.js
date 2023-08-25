const { response, request } = require("express");
const jwt = require("jsonwebtoken");

const verifyRefreshJWT = (req = request, res = response, next) => {

    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Missing refresh token' });
    }

    const refresh_token = authHeader.split(' ')[1];
    // console.log('refresh token', refresh_token)

    jwt.verify(
        refresh_token,
        process.env.REFRESH_TOKEN_SECRET,
        (err, payload) => {
            if (err) {
                // console.log(`Invalid refresh token: ${err}`)
                return res.status(401).json({ message: 'Invalid refresh token' })
            }
            // console.log('refresh token payload', payload)

            req.uid = payload.uid
            req.refresh_token = refresh_token
            next();
        });
}


module.exports = {
    verifyRefreshJWT,
}
