import React from "react";
import API from "../../utils/API";
import SavedResult from "../../components/SavedResult";

class Bookshelf extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    API.getBooks()
      .then((res) => this.setState({ books: res.data }))
      .catch((err) => console.log(err));
  }

  handleDeleteButton = (id) => {
    API.deleteBook(id)
      .then((res) => this.componentDidMount())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="bookshelfWrapper">
        <p>{this.state.books}</p>
        <SavedResult
          books={this.state.books}
          handleDeleteButton={() => this.handleDeleteButton}
        />
      </div>
    );
  }
}

export default Bookshelf;
