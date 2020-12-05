import React from "react";
import { Link } from "react-router-dom";

import classes from "./exercise.module.css";

const Exercise = (props) => {
  return (
    <tr className={classes.TableRow}>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <span className={classes.Button}>
          <Link to={"/editEx/" + props.exercise._id}>edit</Link>
        </span>{" "}
        <span className={classes.Button}>
          <a href="#" onClick={() => props.deleteExercise(props.exercise._id)}>
            Delete
          </a>
        </span>
      </td>
    </tr>
  );
};

export default Exercise;
