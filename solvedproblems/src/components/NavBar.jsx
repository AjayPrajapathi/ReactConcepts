import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Counter</NavLink>
      <br />
      <NavLink to="todo-list">TodoList</NavLink><br/>
      <NavLink to="dynamic-search">Dynamic Search</NavLink><br/>
      <NavLink to="key-down">KeyDown</NavLink><br/>
      <NavLink to="fetch">Fetch</NavLink><br/>
      <NavLink to="time">Greeting</NavLink><br/>
      <NavLink to="pagination">Pagination</NavLink>
    </div>
  );
};

export default NavBar;
