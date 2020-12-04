import React, { Component } from "react";
import DatePicker from "react-datepicker";

import classes from "./createExercise.module.css";
import "react-datepicker/dist/react-datepicker.css";

class createExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  onChangeUsername(e) {
    console.log(this);
    //   this.setState({ username: e.target.value });
  }

  onChangeDescription(e) {
    this.setState({ description: e.target.value });
  }

  onChangeDuration(e) {
    this.setState({ duration: e.target.value });
  }

  onChangeDate(date) {
    this.setState({ date: date });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(exercise);

    this.props.history.push("/");
  }

  render() {
    return (
      <>
        <div className={classes.Container}>
          <h3 className={classes.Title}>Create exercise</h3>
          <form onSubmit={this.onSubmit}>
            <div className={classes.FormElement}>
              <label>Username:</label>
              <select
                className={classes.InputElement}
                ref="userInput"
                required
                value={this.state.username}
                onChange={(e) => this.onChangeUsername(e)}
              >
                {this.state.users.map((user) => {
                  return (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={classes.FormElement}>
              <label>Description: </label>
              <input
              className={classes.InputElement}
                type="text"
                required
                value={this.state.description}
                onChange={(e) => this.onChangeDescription(e)}
              />
            </div>
            <br />
            <div className={classes.FormElement}>
              <label>Duration: </label>
              <input
              className={classes.InputElement}
                type="text"
                value={this.state.duration}
                onChange={(e) => this.onChangeDuration(e)}
              />
            </div>
            <br />
            <div className={classes.FormElement}>
              <label>Date: </label>
              <DatePicker
              className={classes.InputElement}
                selected={this.state.date}
                onChange={(date) => this.onChangeDate(date)}
              />
            </div>
            <div>
              <input type="submit" value="Create Exercise log" className={classes.Button}/>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default createExercise;
