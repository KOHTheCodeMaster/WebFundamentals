let request = require("request");

let url = "http://www.google.com";

request(url, function (error, res, body) {

    if (error) {
        console.log("Error occured.");
        console.log(error);
        return;
    }

    //  Response Status is OK
    if (res.statusCode === 200) console.log(body);

});
