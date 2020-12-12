let mongoose = require("mongoose");

//  Initialize Comments Schema
let commentSchema = mongoose.Schema({
    content: String,
    likesCount: {type: Number, default: 0}
});

//  Return Comment model
module.exports = mongoose.model("Comment", commentSchema);
