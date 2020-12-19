let express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    // passportLocalMongoose = require("passport-local-mongoose"),
    User = require("./models/user"),
    loggedInUser,
    app = express();

//  App Configuration
//  --------------------------------------------------

app.use(require("express-session")({
    secret: "This is a secret key used for encryption/decryption of messages.",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//  Setup MongoDB Database
//  --------------------------------------------------

//  Establish Connection with DB
mongoose.connect("mongodb://localhost:27017/Simple-Auth-App-V2", function (err) {
    if (err) console.log(err);
    else console.log("Connection To MongoDB Established successfully.")
});


//  Setup Routes
//  --------------------------------------------------

//  Root page route - Redirect to Register form
app.get("/", function (req, res) {
    res.redirect("/register");
});

// Render Home Page
app.get("/home", isLoggedIn, function (req, res) {
    res.render("home", {user: loggedInUser});
});

// Logout route
app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

// Register Routes
// ---------------

// Render Register Form
app.get("/register", function (req, res) {
    res.render("register");
});

// Register post page route
app.post("/register", function (req, res) {

    // Register username in db along with hash of the password rather than raw string
    User.register(new User({username: req.body.username}), req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            return;
        }
        //  Update loggedInUser on successful login
        loggedInUser = user;
        console.log("Registration successful - " + loggedInUser.username);

        //  Authenticate user & render home page
        //  Doubt: Strange method parameter syntax
        passport.authenticate("local")(req, res, function () {
            res.redirect("/home");
        });
    });

});

// Login Routes
// ------------

// Render Login Form
app.get("/login", function (req, res) {
    res.render("login");
});

// Login page route
app.post("/login", passport.authenticate("local", {
    // successRedirect: "/home",    //  Unable to pass args
    failureRedirect: "/register"
}), function (req, res) {
    //  Find the user logged in db
    User.findOne({username: req.body.username}, function (err, user) {
        if (err) {
            console.log(err);
            return;
        }
        // Update loggedInUser
        loggedInUser = user;
        console.log("Successfully Logged in - " + loggedInUser.username);
        // Redirect to /home route
        res.redirect("/home");
    });
});

//  Define isLoggedIn() middleware to be executed before /logout route
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) next();
    else res.redirect("/login");
}

//  Boot the Server
app.listen(3000, function () {
    console.log("Server Booted..!! [Port#3000]");
});

