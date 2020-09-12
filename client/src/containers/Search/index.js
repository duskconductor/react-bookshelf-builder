import React from "react";
import API from "../../utils/API";
import SearchResult from "../../components/SearchResult";
import Searchbar from "../../components/Searchbar";

class Search extends React.Component {
  state = {
    search: "",
    books: [],
    error: "",
    message: "",
  };

  handleInputChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    API.getGoogleSearchBooks(this.state.search)
      .then((res) => {
        if (res.data.items === "error") {
          return "error";
        } else {
          let results = res.data.items;

          results = results.map((result) => {
            result = {
              key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              author: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink,
            };

            return result;
          });
          this.setState({ books: results, error: "" });
        }
      })
      .catch((err) => this.setState({ error: err.items }));
  };

  handleSavedButton = (e) => {
    e.preventDefault();
    console.log(this.state.books);
    let savedBooks = this.state.books.filter((book) => book.id === e.target.id);

    savedBooks = savedBooks[0];

    API.saveBook(savedBooks)
      .then(this.setState({ message: alert("Your book is saved") }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="searchWrap">
        <Searchbar
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <SearchResult
          searched={this.state.search}
          books={this.state.books}
          handleSavedButton={this.handleSavedButton}
        />
      </div>
    );
  }
}

export default Search;
