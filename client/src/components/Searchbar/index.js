import React from "react";

const Searchbar = (props) => {
  return (
    <form>
      <div className="searchbarWrap">
        <input
          className="searchbarField"
          value={props.search}
          type="text"
          name="searchBook"
          placeholder="Search for book"
          onChange={props.handleInputChange}
        />
        <button
          type="submit"
          className="searchBtn"
          onClick={props.handleFormSubmit}
        >
          <i class="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
