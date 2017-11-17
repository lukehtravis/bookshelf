import React from 'react';
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'
import SearchForBook from './SearchForBook.js'
import './App.css'
import { Link, Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
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
      if (book.shelf === "wantToRead") {
        want.push(book)
      }
      if (book.shelf === "currentlyReading") {
        current.push(book)
      }
      if (book.shelf === "read") {
        read.push(book)
      }
    }

    return (
      <div className="app">
        <Route path="/search" exact render={() => (
          <SearchForBook onMoveBook={this.moveBook} stateProp={this.state.books} />
        )}/>
        <Route path="/" exact render={() => (
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
                        return <Book key={book.id} onMoveBook={this.moveBook} individualBook={book} />
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
                        return <Book key={book.id} onMoveBook={this.moveBook} individualBook={book} />
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
                        return <Book key={book.id} onMoveBook={this.moveBook} individualBook={book} />
                      })}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
