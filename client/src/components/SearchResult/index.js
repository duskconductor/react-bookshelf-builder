import React from "react";

const SearchResult = (props) => {
  return props.books.length === 0 ? (
    <div className="searchResultWrapper">
      <div className="searchResultContent">
        <h2>
          <i class="fas fa-search"></i> Finding {props.searched}
        </h2>
        <p>Currently no results</p>
      </div>
    </div>
  ) : (
    <div className="searchResultWrapper">
      <div className="searchResultContent">
        <h2>
          <i class="fas fa-search"></i> - {props.searched}
        </h2>
        {props.books.map((book) => {
          return (
            <div className="bookContainer" id={book.title}>
              <h3>{book.title}</h3>
              <h5>{book.author}</h5>
              <div className="bookFirstRow">
                <div className="bookImageContainer">
                  <img src={book.image} alt={book.title} />
                </div>
              </div>
              <div className="bookSecondRow">
                <p>
                  {book.description}
                  <a href={book.link} target="_blank">
                    Learn More
                  </a>
                </p>
              </div>
              <div className="bookBottom">
                <button
                  className="bookButton"
                  id={book.id}
                  onClick={(e) => props.handleSavedButton(e)}
                >
                  Save Book
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
