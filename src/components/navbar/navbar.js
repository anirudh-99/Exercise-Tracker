import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import classes from './navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <nav className={classes.Navbar}>
        <span className={classes.logo}><Link to="/">ExcerTracker</Link></span>
        <ul>
          <li>
            <NavLink to="/" activeClassName={classes.active} exact >Exercises</NavLink>
          </li>
          <li>
            <NavLink to="/createEx" activeClassName={classes.active}>Create Exercise Log</NavLink>
          </li>
          <li>
            <NavLink to="/createUser" activeClassName={classes.active}>Create User</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
