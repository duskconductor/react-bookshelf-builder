import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="headerWrapper">
        <div className="headerContainer">
          <div className="headerLinkList">
            <Link
              className={
                window.location.pathname === "/login"
                  ? "navLink active"
                  : "navLink"
              }
              to="/login"
            >
              Log In
            </Link>
            <Link
              className={
                window.location.pathname === "/" ? "navLink active" : "navLink"
              }
              to="/"
            >
              Search Books
            </Link>
            <Link
              className={
                window.location.pathname === "/bookshelf"
                  ? "navLink active"
                  : "navLink"
              }
              to="/bookshelf"
            >
              Your Bookshelf
            </Link>
          </div>
        </div>
        <div className="headerText">
          <h1>Bookshelf Builder</h1>
        </div>
      </div>
    );
  }
}

export default Header;
