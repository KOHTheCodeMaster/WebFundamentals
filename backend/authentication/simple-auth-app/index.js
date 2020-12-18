let express = require("express"),
    mongoose = require("mongoose"),
    bodyparser = require("body-parser"),
    app = express();

//  App Configuration
//  --------------------------------------------------

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//  Setup MongoDB Database
//  --------------------------------------------------

//  Establish Connection with DB
mongoose.connect("mongodb://localhost:27017/Simple-Auth-App-V1", function (err) {
    if (err) console.log(err);
    else console.log("Connection To MongoDB Established successfully.")
});


//  Setup Routes
//  --------------------------------------------------

//  Root page route
app.get("/", function (req, res) {
    res.redirect("/login");
});

// Login index page route
app.get("/login", function (req, res) {
    res.render("login");
});

// Login post page route
app.post("/login", function (req, res) {
    res.render("home", {username: req.body.username});
});

// Register index page route
app.get("/register", function (req, res) {
    res.render("register");
});


//  Boot the Server
app.listen(3000, function () {
    console.log("Server Booted..!! [Port#3000]");
});

