var express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  College = require("./models/college"),
  seedDB = require("./seed"),
  isEligible = require("./Eligibility.js"),
  port = 3000;

// Connecting mongoose to the local database
mongoose.connect("mongodb://localhost:27017/rank_predictor", {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

// seeding the database
// seedDB();

// configuring different plugins
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/colleges", (req, res) => {
  College.find({}, (err, allColleges) => {
    if (err) {
      console.log(err);
    } else {
      res.render("collegeList", {
        isEligible: isEligible,
        colleges: allColleges,
        rank: req.body.rank,
        category: req.body.category,
        seat_pool: req.body.seat_pool,
        // alloted_quota: req.body.alloted_quota,
        state_of_eligibility: req.body.state_of_eligibility,
        main_advanced: req.body.main_adv
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
