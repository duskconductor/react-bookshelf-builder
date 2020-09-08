import React from "react";

const Searchbar = (props) => {
  return (
    <form>
      <div className="searchbarWrap">
        <label className="BookSearchLabel">
          <h3>Search For Book</h3>
        </label>
        <br></br>
        <input
          className="searchbarField"
          value={props.search}
          type="text"
          name="searchBook"
          placeholder="Search for book"
          onChange={props.handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="submitBtn btn btn-primary"
        onClick={props.handleFormSubmit}
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
