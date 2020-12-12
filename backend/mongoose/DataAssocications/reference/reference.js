let mongoose = require("mongoose");

//  Connect to MongoDB
let strConnectionUrl = "mongodb://localhost/demo_blog_1";
mongoose.connect(strConnectionUrl);

//  Initialize Comments Schema
let commentSchema = mongoose.Schema({
    content: String,
    likesCount: {type: Number, default: 0}
});

//  Initialize Blog Post Schema
let blogPost = mongoose.Schema({
    title: String,
    description: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

//  Initialize BlogPost & Comment model
let BlogPost = mongoose.model("BlogPost", blogPost);
let Comment = mongoose.model("Comment", commentSchema);


//  Find the blog with references of comments
BlogPost.findOne({title: "John Doe"}, function (err, emps) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Existing Documents:");
    console.log(emps);
});


//  Display the blog post along with all the comments populated
BlogPost.findOne({title: "John Doe"}).populate("comments").exec(function (err, foundBlog) {
    if (err) console.log(err);
    else console.log(foundBlog);
});


/*
//  Create & add new document to DB
BlogPost.create({
    title: "Title - 1",
    description: "lorem ipsum. - 1"
}, function (err, document) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("\nNew Document has been added.");
    console.log(document);
});
*/

/*
Comment.create({
    content: "Nice Shot! ;)",
    likesCount: 17
}, function (err, comment) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("\nComment saved in DB.");
    console.log(comment);

    //  Find particular Blog Post & add the comment to it
    BlogPost.findOne({title: "John Doe"}, function (err, foundBlog) {
        if (err) {
            console.log(err);
            return;
        }
        foundBlog.comments.push(comment);
        foundBlog.save(function (err, data) {
            if(err) console.log(err);
            else {
                console.log(data);
            }
        });

    });

});
*/
