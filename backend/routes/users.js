const router = require("express").Router();
let userModel = require("../models/user.model");

router
  .route("/")
  .get((req, res) => {
    userModel
      .find()
      .then((users) =>
        res.json({
          status: "success",
          data: users,
        })
      )
      .catch((err) =>
        res.status(400).json({
          status: "fail",
          message: err.message,
        })
      );
  })
  .post((req, res) => {
    const username = req.body.username;

    const newUser = new userModel({ username: username });

    newUser
      .save()
      .then(() => {
        return res.json({
          status: "success",
          message: "user added",
        });
      })
      .catch((err) =>
        res.status(400).json({
          status: "fail",
          message: err.message,
        })
      );
  });

module.exports = router;
