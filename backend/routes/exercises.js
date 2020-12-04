const router = require("express").Router();
let exerciseModel = require("../models/exercise.model");

router
  .route("/")
  .get((req, res) => {
    exerciseModel
      .find()
      .then((exercises) =>
        res.json({
          status: "success",
          data: exercises,
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
    const description = req.body.description;
    const duration = req.body.duration * 1;
    const date = new Date(req.body.date);

    const newExercise = new exerciseModel({
      username,
      description,
      duration,
      date,
    });

    newExercise
      .save()
      .then(() => {
        return res.json({
          status: "success",
          message: "exercise added",
        });
      })
      .catch((err) =>
        res.status(400).json({
          status: "fail",
          message: err.message,
        })
      );
  });

router
  .route("/:id")
  .get((req, res) => {
    exerciseModel
      .findById(req.params.id)
      .then((exercise) =>
        res.json({
          status: "success",
          data: exercise,
        })
      )
      .catch((err) => {
        res.status(400).json({
          status: "fail",
          message: err.message,
        });
      });
  })
  .delete((req, res) => {
    exerciseModel
      .findByIdAndDelete(req.params.id)
      .then(() =>
        res.json({
          status: "success",
          message: "exercise deleted successfully",
        })
      )
      .catch((err) => {
        res.status(400).json({
          status: "fail",
          message: err.message,
        });
      });
  })
  .patch((req, res) => {
    exerciseModel.findById(req.params.id).then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = req.body.duration * 1;
      exercise.date = new Date(req.body.date);

      exercise
        .save()
        .then(() =>
          res.json({
            status: "success",
            message: "exercise updated successfully",
          })
        )
        .catch((err) => {
          res.status(400).json({
            status: "fail",
            message: err.message,
          });
        });
    });
  });

module.exports = router;
