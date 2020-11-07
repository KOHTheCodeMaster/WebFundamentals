//  Define element variables
let scoreboard;
let wrapperBestOfN;
let inputBestOfN;
let btnP1, btnP2, btnReset;

//  Initialize default values
let bestOfN = 5;
let p1 = 0;
let p2 = 0;

//  Wait for the html content to be loaded before running the major function
document.addEventListener("DOMContentLoaded", () => {

    major();

});

function major() {

    init();

}

function init() {

    //  Initialize elements
    scoreboard = document.querySelector("#scoreboard");
    wrapperBestOfN = document.querySelector("#best-of-n");
    inputBestOfN = document.querySelector("#input-best-of-n");
    btnP1 = document.querySelector("#btn-player-one");
    btnP2 = document.querySelector("#btn-player-two");
    btnReset = document.querySelector("#btn-reset");

    //  Apply Event Listeners
    btnP1.addEventListener("click", updateP1Score);
    btnP2.addEventListener("click", updateP2Score);
    inputBestOfN.addEventListener("change", updateBestOfN);
    btnReset.addEventListener("click", resetStats);

}

function resetStats() {
    scoreboard.textContent = "0 - 0";
    p1 = 0;
    p2 = 0;
}

function updateBestOfN() {

    if (checkGameOver()) {
        inputBestOfN.value = bestOfN;
        return;
    }
    let num = inputBestOfN.value;
    bestOfN = num > 10 ? 10 : num < 1 ? 1 : num;
    this.value = bestOfN;
    wrapperBestOfN.textContent = "Best Of " + bestOfN;

}

function updateP1Score() {
    p1 += 1;
    if (checkGameOver()) return;
    scoreboard.textContent = p1 + " - " + p2;
}

function updateP2Score() {
    p2 += 1;
    if (checkGameOver()) return;
    scoreboard.textContent = p1 + " - " + p2;
}

function checkGameOver() {

    if (p1 >= bestOfN) {
        scoreboard.textContent = "Player One WON!";
        return true;
    }
    if (p2 >= bestOfN) {
        scoreboard.textContent = "Player Two WON!";
        return true;
    }

    return false;
}

