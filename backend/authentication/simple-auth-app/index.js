let express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    passport = require("passport"),
    // LocalStrategy = require("passport-local"),
    // passportLocalMongoose = require("passport-local-mongoose"),
    User = require("./models/user"),
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

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.urlencoded({extended: true}));
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
    res.redirect("/register");
});

// Register index page route
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

        //  Authenticate user & render home page
        //  Doubt: Strange method parameter syntax
        passport.authenticate("local")(req, res, function () {
            res.render("home", {user: user});
        });
    });

});

// Login index page route
app.get("/login", function (req, res) {
    res.render("login");
});


//  Boot the Server
app.listen(3000, function () {
    console.log("Server Booted..!! [Port#3000]");
});

