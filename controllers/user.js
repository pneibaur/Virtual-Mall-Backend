const User = require("../models/User");

module.exports = {
  index,
};

function index(req, res) {
  User.find({}, function (err, user) {
    res.render("home/index", {
      user,
      user: req.user,
    });
  });
}
