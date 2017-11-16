import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'
import { Link } from 'react-router-dom'

class SearchForBook extends Component {

  state = {
    query: '',
    searchedBooks: [],
  }

  backToMainPage() {
    this.props.onGoBack();
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    BooksAPI.search(this.state.query).then((searchedBooks) => {
      this.setState({searchedBooks})
    })
  };

  render() {

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={() => this.backToMainPage()}>Close</Link>
          <div className="search-books-input-wrapper">
            <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.searchedBooks.map((book) => {
                return <Book  onMoveBook={this.props.onMoveBook} individualBook={book} />
              })
            }
          </ol>
        </div>
      </div>
    )
  }

}

export default SearchForBook
