import React from "react";

const Header = props => {
  return (
    <header>
      <div className="nav">
        <h2 className="nav-bar">
          <span>NASA Pic of the day</span> <span>{props.title}</span>
        </h2>
      </div>
    </header>
  );
};

export default Header;
