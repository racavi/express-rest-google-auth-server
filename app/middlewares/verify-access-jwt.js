const { response, request } = require("express");
const jwt = require("jsonwebtoken");

const verifyAccessJWT = (req = request, res = response, next) => {

    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Missing access token' });
    }

    const access_token = authHeader.split(' ')[1];

    jwt.verify(
        access_token,
        process.env.SECRET_OR_PRIVATE_KEY,
        (err, payload) => {
            if (err) {
                // console.log(`Invalid access token: ${err}`)
                return res.status(401).json({ message: 'Invalid access token' })
            }
            req.uid = payload.uid
            next();
        });
}


module.exports = {
    verifyAccessJWT,
}
