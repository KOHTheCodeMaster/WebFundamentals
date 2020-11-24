let express = require("express");
let app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/test", function (req, res) {
    res.render("test");
});

app.listen(3000, function () {
    console.log("Server Booted successfully at PORT#3000");
});