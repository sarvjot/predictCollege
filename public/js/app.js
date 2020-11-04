var advancedBtn = document.querySelector("#advanced");
var mainBtn = document.querySelector("#main");
var rankInput = document.querySelector("#rank");
var stateInput = document.querySelector("#state_of_eligibility");
var nextButton = document.querySelector("#next");
var inputDivs = document.querySelectorAll(".input-div");

// ADDING MAINS ADVANCED BUTTON FUNCTIONALITY

advancedBtn.addEventListener("change",() => {
    stateInput.style.display = "none";
})
mainBtn.addEventListener("change",() => {
    stateInput.style.display = "flex";
})


document.addEventListener("DOMContentLoaded", () => {
    $('.js-example-basic-single').select2();
})

