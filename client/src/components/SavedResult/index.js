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
              <div className="bookFirstColumn">
                <div className="bookTitle">{book.title}</div>
                <div className="bookImageContainer">
                  <img src={book.image} alt={book.title} />
                </div>
              </div>
              <div className="bookSecondColumn">
                <h3>{book.title}</h3>
                <h5>{book.author}</h5>
                <p>{book.description}</p>
                <br />
                <p>
                  <a href={book.link} target="_blank">
                    Learn More
                  </a>
                </p>
              </div>
              <div className="bookBottom">
                <button
                  className="bookButton"
                  id={book.id}
                  onClick={() => props.handleDeleteButton(book.id)}
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
