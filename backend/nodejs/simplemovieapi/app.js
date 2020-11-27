let express = require("express");
let request = require("request");
let app = express();
let data = [];
app.set("view engine", "ejs");

//  Search route at home page
app.get("/", function (req, res) {

    res.render("search");

});

//  route to display the results
app.get("/result", function (req, res) {

    let title = req.query.title;
    let url = "http://www.omdbapi.com/?apikey=96792a97&s=" + title;

    request(url, function (error, response, body) {

        if (!error && res.statusCode === 200) {
            data = JSON.parse(body);
            console.log(data);

            res.render("result", {data: data["Search"]});
        }

    });

});


app.listen(3000, function () {
    console.log("Server Booted..!! [Port#3000]");
});