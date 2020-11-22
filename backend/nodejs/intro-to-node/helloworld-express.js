let express = require("express");
let app = express();

//  SETUP ROUTES
//  --------------------------------------------------

//  Home page route
app.get("/", function (req, res) {
    res.send("Home Page.");
});

//  Movie page route with simple pattern
app.get("/movie/:movieName", function (req, res) {
    let movieName = req.params.movieName;
    res.send("Movie Page.\nMovie Name : " + movieName);
});

//  Posts page with complicated route pattern
app.get("/posts/:id/tag/:tagName", function (req, res) {
    let id = req.params.id;
    let tagName = req.params.tagName;
    res.send("Posts Page." +
        "id: " + id +
        "tagName: " + tagName);
});

//  All other routes
app.get("/", function (req, res) {
    res.send("Unfortunately the page is not found...");
});

//  Start the server by listening for requests at PORT 3000
app.listen(3000, function () {
    console.log("Server started listening at PORT: " + 3000);
});