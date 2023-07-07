const mongoose = require('mongoose');

const dbConnection = async () => {

    try {

        await mongoose.connect(process.env.MONGODB_CNN, {
            authSource: "admin",
            user: process.env.MONGODB_USER_NAME,
            pass: process.env.MONGODB_USER_PASSWORD,
            useNewUrlParser: true,
        });

        console.log('Established database connection.')

    } catch (error) {
        console.log(error);
        throw new Error('Error establishing database connection.');
    }

}

module.exports = {
    dbConnection,
}