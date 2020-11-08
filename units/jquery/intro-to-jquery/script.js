//  Wait for the html content to be loaded before running the major function
document.addEventListener("DOMContentLoaded", () => {

    major();

});

function major() {

    //  Find h1 elements by tag name
    //  $("cssQuerySelector") is equivalent to querySelectorAll("cssQuerySelector")
    let headings = $("h1");

    //  Add, remove & toggle class using jQuery methods
    //  Add class to all the headings without iterating the list using jQuery addClass method
    headings.addClass("heading");

    //  Remove class from last heading element
    headings.last().removeClass("heading");

    //  Toggle heading class for 2nd h1 tag
    headings.eq(1).toggleClass("heading");

    //  Choose specific nth element from the selected element
    let secondLink = $("a").eq(1);

    //  Get & Set attribute using attr method
    secondLink.attr({
        name: "Facebook",
        href: "https://facebook.com"
    });

    //  text() -> text content
    secondLink.text("Link To " + secondLink.attr("name") + ".com");

    //  Reset textContent for ol element with id #test-textcontent
    //  Updating textContent overwrites all the nested html tags
    $("#test-textcontent").text("Ordered List has been modified by jQuery method.");

    //  html() -> inner html
    //  Reset innerHTML for div element with id #test-innerhtml
    //  Updating innerHTML overwrites previous html tags but retains the html tags of new value
    $("#test-innerhtml").html("<p>Lorem ipsum dolor sit amet," +
        " consectetur adipisicing elit. Odio, officiis!</p>");

}






