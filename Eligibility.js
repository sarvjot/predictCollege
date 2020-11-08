function isEligibleForStateQuota(quota, state_of_eligibility, college_home_states){
    // if the seat has a state quota AND the candidate belongs to the same state
    if (
        (quota.alloted_quota === "GO" && state_of_eligibility === "Goa")
        ||(quota.alloted_quota === "AP" && state_of_eligibility === "Arunachal Pradesh") 
        || (quota.alloted_quota === "HS" && college_home_states.includes(state_of_eligibility))
    ){
        return true;
    }else{
        return false;
    }
}

function isEligibleForOtherStateQuota(quota, state_of_eligibility, college_home_states){
    // if the seat has a other state quota AND the candidate DOES NOT belong to the same state as that of the institute
    if(
        (quota.alloted_quota === "OS" || quota.alloted_quota === "AI") 
        && ((college_home_states.includes(state_of_eligibility) === false ) || college_home_states.length === 0)
    ){
        return true;
    }else{
        return false;
    }
}

function isEligible(branch, rank, category, state_of_eligibility, seat_pool, main_advanced, college_home_states) {
  var finalQuota;
  if (category == branch.Category && seat_pool == branch.seat_pool && main_advanced == branch.iit &&
    !branch.branch_name.includes("Architecture")
  ) {
    // Category Matched
    var foundQuota = false;
    branch.quotas.forEach((quota) => {
      if (foundQuota === false) {
        if (
            isEligibleForStateQuota(quota,state_of_eligibility, college_home_states)
            || isEligibleForOtherStateQuota(quota, state_of_eligibility, college_home_states)  
        ) {
          if (Number(rank) <= Number(quota.closing_rank)) {
            finalQuota = quota;
            foundQuota = true;
          }
        }
      }
    });
  }
  return finalQuota;
}

module.exports = isEligible;