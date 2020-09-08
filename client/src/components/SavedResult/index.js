import React from "react";

const SavedResult = (props) => {
  return props.books.length === 0 ? (
    <div className="searchResultWrapper">
      <div className="searchResultContent">
        <p></p>
      </div>
    </div>
  ) : (
    <div className="searchResultWrapper">
      <div className="searchResultContent">
        {props.books.map((book) => {
          return (
            <div className="bookContainer" id={book.title}>
              <h3>{book.title}</h3>
              <h5>{book.authors}</h5>
              <div className="bookFirstRow">
                <div className="bookImageContainer">
                  <img src={book.image} alt={book.title} />
                </div>
              </div>
              <div className="bookSecondRow">
                <p>
                  {book.description.substring(0, 300)}...{" "}
                  <a href={book.link} target="_blank">
                    Learn More
                  </a>
                </p>
              </div>
              <div className="bookBottom">
                <button
                  className="bookButton"
                  id={book._id}
                  onClick={() => props.handleDeleteButton(book._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavedResult;
