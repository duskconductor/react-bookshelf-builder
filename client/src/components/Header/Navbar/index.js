import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbarWrapper">
        <div className="navbarContainer">
          <div className="navbarText">
            <p>Bookshelf Builder</p>
          </div>
          <div className="navbarLinkList">
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
      </div>
    );
  }
}

export default Navbar;
