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
    res.render("simple.ejs", {movieName: movieName});
});

//  Test route - create list at runtime using ejs template
app.get("/test", function (req, res) {

    let links = ["Facebook.com",
        "Google.com",
        "Youtube.com"];

    res.render("list.ejs", {links: links});

});

//  All other routes
app.get("*", function (req, res) {
    res.send("Unfortunately the page is not found...");
});

//  Start the server by listening for requests at PORT 3000
app.listen(3000, function () {
    console.log("Server started listening at PORT: " + 3000);
});
