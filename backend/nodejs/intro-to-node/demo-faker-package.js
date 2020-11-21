let cat = require("cat-me");
let faker = require("faker");

displayCats();

displayRandomProducts(5);

function displayRandomProducts(n) {

    console.log("Product Details:");
    for (let i = 0; i < n; i++)
        console.log(faker.commerce.productName() + "  -  Rs. " + faker.commerce.price());

}

function displayCats() {

    console.log("Cats:\n");
    console.log(cat());
    console.log(cat("resting"));
    console.log(cat("thoughtful"));

}
