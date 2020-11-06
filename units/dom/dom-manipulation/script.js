//  document is the root element of all the objects model for every html page
//  Wait for the html content to be loaded before running the major function
document.addEventListener("DOMContentLoaded", () => {

    domSelect();

    domManipulate();

});

function domSelect() {

    //  Get element by id
    console.log("\ndocument.getElementById(elementId)");
    let item = document.getElementById("exclusive");
    console.log(item);
    console.log("Text Content: " + item.textContent);

    /*
        Get node list of elements by class name
        Node list is similar to array but actually it is an object
        node list doesn't have forEach method unlike arrays
    */
    console.log("\ndocument.getElementsByClassName(className)");
    let itemsNodeList = document.getElementsByClassName("heading");
    console.log(itemsNodeList);
    console.log(itemsNodeList[0]);

    //  Get node list of elements by tag name
    console.log("\ndocument.getElementsByTagName(tagName)");
    itemsNodeList = document.getElementsByTagName("h1");
    console.log(itemsNodeList);
    console.log(itemsNodeList[1]);

    //  Get the first item by css query selector
    console.log("\ndocument.querySelector(cssSelector)");
    console.log(document.querySelector("#exclusive"));
    console.log(document.querySelector(".heading"));
    console.log(document.querySelector("h1"));

    //  Get node list of elements by css query selector
    console.log("\ndocument.querySelectorAll(cssSelector)");
    itemsNodeList = document.querySelectorAll("h1");
    console.log(itemsNodeList);

}

function domManipulate() {

    //  Find body element by tag name
    let body = document.getElementsByTagName("body")[0];
    let hasChanged = false;

    //  Update text color & background color of body every 1000 ms
    setInterval(function () {

        if (hasChanged) {
            body.style.backgroundColor = "grey";
            body.style.color = "black";
        } else {
            body.style.backgroundColor = "black";
            body.style.color = "white";
        }
        hasChanged = !hasChanged;

    }, 1000);

}






