import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'
import App from './App.js'
import Book from './Book.js'

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
  }

  render() {

    const { query } = this.state

    let showingBooks
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = this.props.stateProp.filter((book) => match.test(book.name))
    } else {
      showingBooks = this.props.stateProp
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.backToMainPage()}>Close</a>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
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
                return <Book individualBook={book} />
              })
            }
          </ol>
        </div>
      </div>
    )
  }

}

export default SearchForBook
