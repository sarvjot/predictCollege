function isEligible(branch, rank, category, state_of_eligibility, seat_pool, main_advanced, college_home_states){
    
    var finalQuota;
    if(category == branch.Category 
        && seat_pool == branch.seat_pool 
        && main_advanced == branch.iit 
        && !(branch.branch_name.includes("Architecture"))){

            // Category Matched
            var foundQuota = false;
            branch.quotas.forEach((quota) => {
                if(foundQuota === false){
                    if(quota.alloted_quota === "OS" 
                    || quota.alloted_quota === "AI"
                    || (quota.alloted_quota === "GO" && state_of_eligibility === "Goa")
                    || (quota.alloted_quota === "AP" && state_of_eligibility === "Arunachal Pradesh")
                    || (quota.alloted_quota === "HS" && college_home_states.includes(state_of_eligibility))
                    ){
                        // Eligiblity matched as well
                        if((Number)(rank) <= (Number)(quota.closing_rank)){
                            // Qualified for seat
                            finalQuota = quota;
                            foundQuota = true;
                        }
                    }
                }
                
            })
    }
    return finalQuota;
}


module.exports = isEligible;