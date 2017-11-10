import React from 'react';
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'
import './App.css';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  };

  moveBook = (book,value) => {
    BooksAPI.update(book,value).then(() => {
      book.shelf = value
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book) })
      )
    })
   }

  render() {

    let want = []
    let current = []
    let read = []

    for (let book of this.state.books) {
      if (book.shelf == "wantToRead") {
        want.push(book)
      }
      if (book.shelf == "currentlyReading") {
        current.push(book)
      }
      if (book.shelf == "read") {
        read.push(book)
      }
    }

    return (
      <div className="app">
      {this.state.showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input type="text" placeholder="Search by title or author"/>

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div className="wantToRead">
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want To Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {want.map((book) => {
                      return <Book onMoveBook={this.moveBook} individualBook={book} />
                    })}
                  </ol>
                </div>
              </div>
            </div>
            <div className="currentlyReading">
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {current.map((book) => {
                      return <Book onMoveBook={this.moveBook} individualBook={book} />
                    })}
                  </ol>
                </div>
              </div>
            </div>
            <div className="read">
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {read.map((book) => {
                      return <Book onMoveBook={this.moveBook} individualBook={book} />
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
        </div>
        )}
      </div>
    )
  }
}

export default BooksApp
