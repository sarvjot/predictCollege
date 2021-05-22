// SCRIPT FOR CLUBBING DIFFERENT BRANCHES OF SAME COLLEGE TOGETHER, VIA SECONDARY LISTS

// Checks if the college of current list, is traversed(and now present in modfied list) or not.
function isPresent(modifiedList, college) {
    for (var i = 0; i < modifiedList.length; i++) {
        modifiedCollege = modifiedList[i];
        // console.log(college.institute_name == modifiedCollege.institute_name);
        if (college.institute_name === modifiedCollege.institute_name) {
            break;
        }
    }
    if (i === modifiedList.length) {
        return -1;
    } else {
        return i;
    }
}

// Traverses through particular seats in raw data and clubs all branches of
// same college together
function dataModifier(arr) {
    // This list of colleges will later be returned
    var list = [];
    // here arr is the raw array of seats
    arr.forEach((college) => {
        // Stores index of college in final list if already present, -1 otherwise
        var index = isPresent(list, college);
        if (index === -1) {
            // If the college is not already present than we have to create one!
            var institute = {
                institute_name: college.institute_name,
                branches: [
                    {
                        branch_name: college.branch_name,
                        alloted_quota: college.alloted_quota,
                        Category: college.Category,
                        seat_pool: college.seat_pool,
                        opening_rank: college.opening_rank,
                        closing_rank: college.closing_rank,
                        iit: college.iit,
                    },
                ],
            };

            // Now we push this newly created college to the final list
            list.push(institute);
        } else {
            // if the college is present in the list, then we have to push branch pertaining to given seat
            var branch = {
                branch_name: college.branch_name,
                alloted_quota: college.alloted_quota,
                Category: college.Category,
                seat_pool: college.seat_pool,
                opening_rank: college.opening_rank,
                closing_rank: college.closing_rank,
                iit: college.iit,
            };

            // now we push this branch into the already existing branches list of the college under discussion
            list[index].branches.push(branch);
        }
    });

    return list;
}

// Now we want to write the resulting list in a javascript file, for this we will use a 'writeFile' function
// Requiring fs module in which writeFile function is defined.

const fs = require("fs");

// Write data in 'Output.js' .
fs.writeFile("Output.js", JSON.stringify(dataModifier(data)), (err) => {
    // In case of a error throw err.
    if (err) {
        console.log(err);
    }
});
