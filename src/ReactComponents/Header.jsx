import React from "react";

function Header(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.sub}</h2>
  </div>;
}

export default Header;
