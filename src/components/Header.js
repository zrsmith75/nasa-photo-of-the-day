import React from "react";

const Header = props => {
  return (
    <header>
      <div>
        <h2>NASA Pic of the day: {props.title}</h2>
      </div>
    </header>
  );
};

export default Header;
