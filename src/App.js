import React from 'react';
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'
import SearchForBook from './SearchForBook.js'
import './App.css'
import { Link } from 'react-router-dom'

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

  goBack = () => {
    this.setState({showSearchPage: false})
  }

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
        <SearchForBook onMoveBook={this.moveBook} onGoBack={this.goBack} stateProp={this.state.books} />
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
            <Link to="/search" onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
          </div>
        </div>
        )}
      </div>
    )
  }
}

export default BooksApp
