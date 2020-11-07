//  document is the root element of all the objects model for every html page
//  Wait for the html content to be loaded before running the major function
document.addEventListener("DOMContentLoaded", () => {

    domManipulate();

});

function domManipulate() {

    //  Find body element by tag name
    let headings = document.getElementsByTagName("h1");

    //  Iterate headings node list and add heading class to each h1 tag
    for (let i = 0; i < headings.length; i++) {
        headings[i].classList.add("heading");
    }

    //  Toggle heading class for 2nd h1 tag
    headings[1].classList.toggle("heading");

    let secondLink = document.getElementsByTagName("a")[1];

    //  Set attribute for element by providing the attribute name followed by the value for that attribute
    secondLink.setAttribute("href", "https://facebook.com");
    secondLink.setAttribute("name", "Facebook");
    secondLink.textContent = "Link To " + secondLink.getAttribute("name") + ".com";

    //  Reset textContent for ol element with id #test-textcontent
    //  Updating textContent overwrites all the nested html tags
    document.querySelector("#test-textcontent").textContent = "Ordered List has been removed.";

    //  Reset innerHTML for div element with id #test-innerhtml
    //  Updating innerHTML overwrites previous html tags but retains the html tags of new value
    document.querySelector("#test-innerhtml").innerHTML = "<p>Lorem ipsum dolor sit amet," +
        " consectetur adipisicing elit. Odio, officiis!</p>";

}






