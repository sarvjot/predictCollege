var advancedBtn = document.querySelector("#advanced");
var mainBtn = document.querySelector("#main");
var rankInput = document.querySelector("#rank");
var stateInput = document.querySelector("#state-input");

advancedBtn.addEventListener("click", () => {
  stateInput.style.display = "none";
  rankInput.placeholder = "Enter Your JEE Advanced Rank";
});
mainBtn.addEventListener("click", () => {
  stateInput.style.display = "flex";
  rankInput.placeholder = "Enter Your JEE Mains Rank";
});
