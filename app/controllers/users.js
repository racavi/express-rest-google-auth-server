const { response } = require('express');

const User = require('../models/user');

const usersGet = ( req, res = response) => {
    res.json({
        message: 'Hello World!'
    });
}

const usersPost = async( req, res = response) => {
    const { mail } = req.body;

    const user = new User({ mail });
    user.save();

    res.json({
        user
    });
}

const userRead = async(req, res = response) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json(user);
}

module.exports = {
    usersGet,
    usersPost,
    userRead,
}