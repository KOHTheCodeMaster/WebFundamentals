//  Wait for the html content to be loaded before running the major function
document.addEventListener("DOMContentLoaded", () => {

    major();

});

function major() {

    //  Find h1 elements by tag name
    let headings = $("span");
    let btnFade = $("#btn-fade");
    let btnSlide = $("#btn-slide");

    //  click event
    btnFade.click(function () {
        //  fadeIn / fadeOut / fadeToggle
        if ($(this).text() === "Fade") $(headings).eq(0).fadeToggle(800);
    });

    let inputElement = $("input");
    inputElement.attr("placeholder", "Enter text");

    //  keypressed | keydown | keyup
    inputElement.keypress(function (event) {
        if (event.which === 13)
            alert("Pressed Enter Key");
    });

    //  on method for click, key & generally preferred all the events
    btnSlide.on("click", function () {
        //  slideUp / slideDown / slideToggle
        if ($(this).text() === "Slide") $(headings).eq(1).slideToggle("slow");
    });

}





