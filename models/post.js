const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        refer: 'User'
    }
},{
    timestamps: true
});
const post = mongoose.model('post', postSchema);
module.exports = post;