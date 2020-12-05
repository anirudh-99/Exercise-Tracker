import React, { Component } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";

import classes from "../createExercise/createExercise.module.css";
import "react-datepicker/dist/react-datepicker.css";

class EditExercise extends Component {
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
    this.setState({ username: e.target.value });
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

    //save the data inside the state in an object
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    // patch the data entered in the backend database
    axios
      .patch(
        `http://localhost:3001/exercises/${this.props.match.params.id}`,
        exercise
      )
      .then((res) => console.log(res));

    this.props.history.push('/');
  }

  componentDidMount() {
    //grab the exercise log from api by get request
    axios
      .get("http://localhost:3001/exercises/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          username: res.data.data.username,
          description: res.data.data.description,
          duration: res.data.data.duration,
          date: new Date(res.data.data.date),
        });
      })
      .catch((err) => {
        console.log(err);
      });

    //grab the users from the backend api and update state
    axios
      .get("http://localhost:3001/users")
      .then((res) => {
        if (res.data.data.length > 0) {
          this.setState({
            users: res.data.data.map((user) => user.username),
            username: res.data.data[0].username,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <div className={classes.Container}>
          <h3 className={classes.Title}>Create exercise</h3>
          <form onSubmit={(e) => this.onSubmit(e)}>
            <div className={classes.FormElement}>
              <label>Username:</label>
              <select
                className={classes.InputElement}
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
              <input
                type="submit"
                value="Edit Exercise log"
                className={classes.Button}
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default EditExercise;
