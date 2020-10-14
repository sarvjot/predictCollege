const mongoose = require("mongoose");

var collegeSchema = new mongoose.Schema({
  institute_name: String,
  branches:[{
    branch_name: String,
    alloted_quota: String,
    Category: String,
    seat_pool: String,
    opening_rank: Number,
    closing_rank: Number,
    iit: String
  }]
});

var College = mongoose.model("College", collegeSchema);

module.exports = College;
