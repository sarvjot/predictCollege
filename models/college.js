const mongoose = require("mongoose");

var collegeSchema = new mongoose.Schema({
    institute_name: String,
    type: String,
    state: [String],
    branches: [
        {
            branch_name: String,
            seat_pool: String,
            Category: String,
            iit: String,
            quotas: [{ alloted_quota: String, opening_rank: String, closing_rank: String }],
        },
    ],
});

var College = mongoose.model("College", collegeSchema);

module.exports = College;
