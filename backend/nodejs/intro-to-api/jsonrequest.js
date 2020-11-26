let request = require("request");

let url = "https://official-joke-api.appspot.com/random_joke";
request(url, function (error, res, body) {

    //  Response Status is OK
    if (!error && res.statusCode === 200) {

        let jsonResponse = JSON.parse(body);
        console.log(jsonResponse);

        console.log("\nJson Response:")
        console.log(jsonResponse.id);
        console.log(jsonResponse.type);
        console.log(jsonResponse["setup"]);
        console.log(jsonResponse['punchline']);

    }

});
