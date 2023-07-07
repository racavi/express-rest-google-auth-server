const { Schema, model } = require('mongoose');

const UserSchema = Schema({

    mail: {
        type: String,
        required: [true, 'Mail is mandatory.'],
        unique: true
    },

})

module.exports = model('User', UserSchema);
