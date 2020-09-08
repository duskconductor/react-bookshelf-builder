import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="headerWrapper">
        <div className="headerContainer">
          <div className="headerLinkList">
            <Link className="navLink" to="/">
              Search Books
            </Link>
            <Link className="navLink" to="/bookshelf">
              The Bookshelf
            </Link>
          </div>
        </div>
        <div className="headerText">
          <h1>
            Bookshelf <span className="headTextEmph">Builder</span>
          </h1>
        </div>
      </div>
    );
  }
}

export default Header;
