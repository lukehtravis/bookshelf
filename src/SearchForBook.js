import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'
import { Link } from 'react-router-dom'

class SearchForBook extends Component {

  state = {
    query: '',
    searchedBooks: [],
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    if (this.state.query !== '') {
      BooksAPI.search(this.state.query, 20).then((searchedBooks) => {
        let shelfCheckedBooks = searchedBooks.map(searchedBook => {
          let bookFound = {}
          for (let i = 0; i < this.props.stateProp.length; i++) {
            if (this.props.stateProp[i].id === searchedBook.id) {
              bookFound = this.props.stateProp[i]
            }
          }
          if(bookFound) {
            searchedBook.shelf = bookFound.shelf;
          }
          return searchedBook;
        });
        this.setState({searchedBooks: shelfCheckedBooks})
      }).catch((error) => {
        this.setState({searchedBooks: []})
      })
    }
  };
  render() {
    const {query} = this.state.query

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.searchedBooks.map((book) => {
                return <Book key={book.id} onMoveBook={this.props.onMoveBook} individualBook={book} />
              })
            }
          </ol>
        </div>
      </div>
    )
  }

}

export default SearchForBook
