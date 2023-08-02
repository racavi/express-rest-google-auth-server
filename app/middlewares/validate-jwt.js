const { response, request } = require("express");
const jwt = require("jsonwebtoken");

const validateJWT = (req = request, res = response, next) => {

    const token = req.header('x-token');

    if ( !token ) {
        return res.status(400).json({ msg: 'Missing JWT' });
    }

    try {
        jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY);
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({ msg: 'Invalid JWT' });
    }

}

module.exports = {
    validateJWT
}