const dotenv = require('dotenv');
const path = require('path');
const bcrypt = require('bcrypt');

// Configure dotenv to use the correct path to your .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

module.exports = {
    PORT: process.env.PORT,
    SALT:bcrypt.genSaltSync(10)
};