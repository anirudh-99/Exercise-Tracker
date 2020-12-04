import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">ExcerTracker</Link>
        <ul>
          <li>
            <NavLink to="/">Exercises</NavLink>
          </li>
          <li>
            <NavLink to="/createEx">Create Exercise Log</NavLink>
          </li>
          <li>
            <NavLink to="/createUser">Create User</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
