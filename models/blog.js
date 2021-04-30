const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create user Schema & model

const blogSchema = new Schema({
    title: {
        type: String ,
        required: true,
    },
    body: {
        type: String ,
        required: true,
    },
    raking:{
        type: Number,
        required: true
    },
}, { timestamps: true});


const Blog = mongoose.model('BlogCollection', blogSchema);

module.exports = Blog;