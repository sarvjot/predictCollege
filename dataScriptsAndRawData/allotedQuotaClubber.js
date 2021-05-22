function quotaClubber(colleges) {
    var list = [];
    colleges.forEach((college) => {
        var modifiedCollege = {
            institute_name: college.institute_name,
            type: college.type,
            state: college.state,
            branches: [],
        };
        var len = college.branches.length;
        var isFilled = new Array(len).fill(false);
        for (var i = 0; i < college.branches.length; i++) {
            var branch = college.branches[i];
            if (isFilled[i] === false) {
                isFilled[i] = true;
                var clubbedBranch = {
                    branch_name: branch.branch_name,
                    seat_pool: branch.seat_pool,
                    Category: branch.Category,
                    iit: branch.iit,
                    quotas: [
                        {
                            alloted_quota: branch.alloted_quota,
                            opening_rank: branch.opening_rank,
                            closing_rank: branch.closing_rank,
                        },
                    ],
                };
                for (var j = i + 1; j < college.branches.length; j++) {
                    var nextBranch = college.branches[j];
                    if (
                        branch.branch_name === nextBranch.branch_name &&
                        branch.Category === nextBranch.Category &&
                        branch.seat_pool === nextBranch.seat_pool &&
                        isFilled[j] === false
                    ) {
                        isFilled[j] = true;
                        clubbedBranch.quotas.push({
                            alloted_quota: nextBranch.alloted_quota,
                            opening_rank: nextBranch.opening_rank,
                            closing_rank: nextBranch.closing_rank,
                        });
                    }
                }
                modifiedCollege.branches.push(clubbedBranch);
            }
        }
        list.push(modifiedCollege);
    });
    return list;
}

const fs = require("fs");
// Write data in 'Output.js' .
fs.writeFile("Output.js", JSON.stringify(quotaClubber(data)), (err) => {
    // In case of a error throw err.
    if (err) {
        console.log(err);
    }
});
