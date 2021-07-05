const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: String,
    mail: String,
    passwork: String
},{collection: 'user'})

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;