var advancedBtn = document.querySelector("#advanced");
var mainBtn = document.querySelector("#main");
var rankInput = document.querySelector("#rank");
var stateInput = document.querySelector("#state-input");
var nextButton = document.querySelector("#next");
var inputDivs = document.querySelectorAll(".input-div");

// Adding Multi-Step Form Functionality

var currentDiv = 0;
showDiv(currentDiv);

function showDiv(n){
    inputDivs[n].style.display = "flex";

    // fix the previous/next buttons:
    if(n == 0){
        document.getElementById("previous").style.display = "none";
    }else{
        document.getElementById("previous").style.display = "inline";
    }
    if(n == (inputDivs.length -1)){
        document.getElementById("next").innerHTML = "Submit";
    }else{
        document.getElementById("next").innerHTML = "Next";
    }

    // run a function that modifies the progress bar:
    // fixStepIndicator(n);
}

function nextPrev(n){
    // Hide the current tab, if its not the last one!
    if(currentDiv !== (inputDivs.length-1)){
        inputDivs[currentDiv].style.display = "none";
    }
    // Increase or decrease the current div by n:
    currentDiv += n;
    // if you have reached the end of the form ...
    if(currentDiv >= inputDivs.length){
        // the document form gets submitted
        document.getElementById("my-form").submit();
        return false;
    }
    // Otherwise, display the correct Tab: 
    showDiv(currentDiv);
}
