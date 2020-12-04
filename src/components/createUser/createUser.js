import React, { useState } from "react";
import classes from "./createUser.module.css";

const CreateUser = () => {
  const [username, setUsername] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = { username: username };
    console.log(newUser);
    setUsername("");
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className={classes.Container}>
      <h3 className={classes.Title}>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className={classes.FormElement}>
          <label>Username: </label>
          <input
            type="text"
            required
            className={classes.InputElement}
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <div>
          <input type="submit" value="Create User" className={classes.Button} />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
