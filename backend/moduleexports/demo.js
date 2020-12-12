let mongoose = require("mongoose");
let BlogPost = require("./models/blogpost")
let Comment = require("./models/comment")

//  Connect to MongoDB
let strConnectionUrl = "mongodb://localhost/demo_blog_2";
mongoose.connect(strConnectionUrl);

//  Find the blog with references of comments
BlogPost.findOne({title: "John Doe - 4"}, function (err, emps) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Existing Documents:");
    console.log(emps);
});


//  Display the blog post along with all the comments populated
BlogPost.findOne({title: "John Doe - 4"}).populate("comments").exec(function (err, foundBlog) {
    if (err) console.log(err);
    else console.log(foundBlog);
});

/*
//  Create & add new document to DB
BlogPost.create({
    title: "John Doe - 4",
    description: "Demo"
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
    content: "Embed - Comment - 4",
    likesCount: 8
}, function (err, comment) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("\nComment saved in DB.");
    console.log(comment);

    //  Find particular Blog Post & add the comment to it
    BlogPost.findOne({title: "John Doe - 4"}, function (err, foundBlog) {
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

