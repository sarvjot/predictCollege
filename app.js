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

app.post("/predict", (req, res) => {
  console.log(req.body);
  College.find({}, (err, allColleges) => {
    if (err) {
      console.log(err);
    } else {
      res.render("collegeList", {
        colleges: allColleges,
        rank: req.body.rank,
        category: req.body.category,
        seat_pool: req.body.seat_pool,
        alloted_quota: req.body.alloted_quota,
        main_advanced: req.body.main_adv
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
