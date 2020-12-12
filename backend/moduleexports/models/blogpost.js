let mongoose = require("mongoose");

//  Initialize Blog Post Schema
let blogPost = mongoose.Schema({
    title: String,
    description: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

//  Return Blog Post model
module.exports = mongoose.model("BlogPost", blogPost);