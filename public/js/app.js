var advancedBtn = document.querySelector("#advanced");
var mainBtn = document.querySelector("#main");
var rankInput = document.querySelector("#rank");
var stateInput = document.querySelector("#state_of_eligibility");
var inputDiv = document.querySelector("#input-div");

// ADDING MAINS ADVANCED BUTTON FUNCTIONALITY

var toggle = (setLayout) => {
    inputDiv.style.opacity = 0;
    setTimeout(() => {
        setLayout();
        inputDiv.style.opacity = 1;
    }, 300);
};


advancedBtn.addEventListener("change",() => {
    toggle(() => {
        stateInput.style.display = "none";
        stateInput.required = false;
        inputDiv.style.gridTemplateAreas = '"category-rank category-rank" "category seat-pool"';
        rankInput.placeholder = "Enter JEE Advanced Category Rank";
    });
})
mainBtn.addEventListener("change",() => {
    toggle(() => {
        stateInput.style.display = "flex";
        stateInput.required = true;
        inputDiv.style.gridTemplateAreas = '"category-rank category" "seat-pool state"';
        rankInput.placeholder = "Enter JEE Mains Category Rank";
    });
})

// Reload the page whenever it is accessed using history
// this prevents any tab-form conflict, by setting main-btn as checked
window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || 
                            ( typeof window.performance != "undefined" && 
                                window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
        // Handle page restore.
        window.location.reload();
    }
});
