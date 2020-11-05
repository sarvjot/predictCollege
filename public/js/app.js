var advancedBtn = document.querySelector("#advanced");
var mainBtn = document.querySelector("#main");
var rankInput = document.querySelector("#rank");
var stateInput = document.querySelector("#state_of_eligibility");
var inputDiv = document.querySelector("#input-div");

// ADDING MAINS ADVANCED BUTTON FUNCTIONALITY

advancedBtn.addEventListener("change",() => {
    stateInput.style.display = "none";
    inputDiv.style.gridTemplateAreas = '"category-rank category-rank" "category seat-pool"';
    rankInput.placeholder = "Enter JEE Advanced Category Rank";
})
mainBtn.addEventListener("change",() => {
    stateInput.style.display = "flex";
    inputDiv.style.gridTemplateAreas = '"category-rank category" "seat-pool state"';
    rankInput.placeholder = "Enter JEE Mains Category Rank"
})

