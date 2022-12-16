const mongoose = require('mongoose');
const { Schema } = mongoose;

const users = new Schema({
    id: Number,
    email: String,
    password: String,
    first_name: String,
    last_name: String,
});
module.exports = mongoose.model('User', users);