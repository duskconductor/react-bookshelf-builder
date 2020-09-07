import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Searchbar />
      </div>
    );
  }
}

export default Header;
