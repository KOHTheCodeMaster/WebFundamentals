let express = require("express");
let bodyparser = require("body-parser");
let app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

let itemList = ["one", 2, 3.14, true];

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/test", function (req, res) {
    res.render("test");
});

app.get("/showlist", function (req, res) {
    res.render("showlist", {itemList: itemList});
});

app.post("/addNewItem", function (req, res) {
    itemList.push(req.body.newItem);
    res.redirect("/showlist");
});

app.listen(3000, function () {
    console.log("Server Booted successfully at PORT#3000");
});