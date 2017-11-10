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

  componentWillMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({books})
  })};

  moveBook = (book,value) => {
     BooksAPI.update(book,value).then(() => {
       book.shelf = value
       this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat(book) })
       )
     })
   }

  render() {
    let want = this.state.books.filter((book) => {
      return book.shelf === "wantToRead"
    })
    let current = this.state.books.filter((book) => {
      return book.shelf === "currentlyReading"
    })
    let read = this.state.books.filter((book) => {
      return book.shelf === "read"
    })

    return (
      <div className="app">
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
        </div>
      </div>
    )
  }
}

export default BooksApp
