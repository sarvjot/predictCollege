var ctr = 0;
function sortQuota(data) {
    data.forEach((college) => {
        college.branches.forEach((branch) => {
            for (var i = 0; i < branch.quotas.length; i++) {
                for (var j = 0; j < branch.quotas.length - i - 1; j++) {
                    if (Number(branch.quotas[j].closing_rank) > Number(branch.quotas[j + 1].closing_rank)) {
                        ctr++;
                        var tempQuota = branch.quotas[j];
                        branch.quotas[j] = branch.quotas[j + 1];
                        branch.quotas[j + 1] = tempQuota;
                    }
                }
            }
        });
    });
    console.log(ctr);
    return data;
}

const fs = require("fs");

fs.writeFile("Output.js", JSON.stringify(sortQuota(data)), (err) => {
    if (err) {
        console.log(err);
    }
});
