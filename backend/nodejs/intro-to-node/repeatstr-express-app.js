let express = require("express");
let app = express();

//  SETUP ROUTES
//  --------------------------------------------------

//  Home page route
app.get("/", function (req, res) {
    res.send("Home Page.");
});

//  All other routes
app.get("/repeat/:str/:num", function (req, res) {
    res.send(createStr(req.params.str, req.params.num));
});

function createStr(str, num) {
    let result = "";
    for (let i = 0; i < num; i++)
        result += str + " ";
    return result;
}

//  Start the server by listening for requests at PORT 3000
app.listen(3000, function () {
    console.log("Server started listening at PORT: " + 3000);
});