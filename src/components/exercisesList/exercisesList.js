import React, { useState, useEffect } from "react";
import axios from "axios";
import Exercise from "../exercise/exercise";

import classes from './exercisesList.module.css';

const ExercisesList = () => {
  const [exercises, setExercises] = useState([]);

  //fetch exercises from api
  useEffect(() => {
    axios.get("http://localhost:3001/exercises").then((res) => {
      setExercises(res.data.data);
    });
  });

  const deleteExercise = async (id) => {
    const res = await axios.delete(`http://localhost:3001/exercises/${id}`);
    console.log(res);
    setExercises(exercises.filter((el) => el._id !== id));
  };

  const exerciseList = () => {
    return exercises.map((currExercise) => {
      return (
        <Exercise
          exercise={currExercise}
          deleteExercise={deleteExercise}
          key={currExercise._id}
        />
      );
    });
  };

  return (
    <div className={classes.TotalList}>
      <h3 className={classes.Title}>Logged Exercises</h3>
      <table className={classes.Table}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{exerciseList()}</tbody>
      </table>
    </div>
  );
};

export default ExercisesList;
