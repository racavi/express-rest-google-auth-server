const jwt = require('jsonwebtoken');

const generateJWT = ( uid = '') => {

    return new Promise( (resolve, reject) => {

        const payload = { uid };

        jwt.sign( payload, process.env.SECRET_OR_PRIVATE_KEY, {
            expiresIn: '1h'
        }, (err, token) => {
            if ( err ) {
                console.log(err);
                reject('Could not generate token');
            } else {
                resolve( token );
            }
        })
    })
}

const generateRefreshJWT = ( uid = '') => {

    return new Promise( (resolve, reject) => {

        const payload = { uid };

        jwt.sign( payload, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRATION
        }, (err, token) => {
            if ( err ) {
                console.log(err);
                reject('Could not generate refresh token');
            } else {
                resolve( token );
            }
        })
    })
}

module.exports = {
    generateJWT,
    generateRefreshJWT,
}