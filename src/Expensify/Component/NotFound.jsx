import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return <div>
      <h1> Page not found 404</h1>
      <h1>please let it </h1>
      <NavLink to="/">Go Home</NavLink>
  </div>;
} 

export default NotFound;
