const { response } = require('express');

const usersGet = ( req, res = response) => {
    res.json({
        message: 'Hello World!'
    });
}

module.exports = {
    usersGet,
}