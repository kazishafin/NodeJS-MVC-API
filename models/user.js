const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create user Schema & model

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name filed is required']
    },
    age: {
        type: Number,
        required: [true, 'Age filed is required']
    },
    marriage: {
        type: Boolean,
        default: false
    }
});


const User = mongoose.model('userlist',UserSchema);

module.exports = User;