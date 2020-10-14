var express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  College = require("./models/college"),
  seedDB = require("./seed"),
  port = 3000;

// Connecting mongoose to the local database
mongoose.connect("mongodb://localhost:27017/rank_predictor", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// seeding the database
// seedDB(); 

// configuring different plugins
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/:rank&:category&:seat_pool&:alloted_quota&:main_advanced", (req, res) => {
  var rank = req.params.rank;
  var category = req.params.category;
  var seat_pool = req.params.seat_pool;
  var alloted_quota = req.params.alloted_quota;
  var main_advanced = req.params.main_advanced;
  College.find({}, (err, allColleges) => {
    if (err) {
      console.log(err);
    } else {
      res.render("collegeList", {
        colleges: allColleges,
        rank: rank,
        category: category,
        seat_pool: seat_pool,
        alloted_quota: alloted_quota,
        main_advanced: main_advanced
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
