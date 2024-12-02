import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Counter</NavLink>
      <br />
      <NavLink to="todo-list">TodoList</NavLink><br/>
      <NavLink to="dynamic-search">Dynamic Search</NavLink><br/>
      <NavLink to="key-down">KeyDown</NavLink>
    </div>
  );
};

export default NavBar;
