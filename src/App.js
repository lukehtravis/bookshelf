import React from 'react';
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf.js'
import SearchForBook from './SearchForBook.js'
import './App.css'
import { Link, Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    currentShelf: [{displayName: 'Want To Read', internalName: 'wantToRead'}, {displayName: 'Currently Reading', internalName: 'currentlyReading'}, {displayName: 'Read', internalName: 'read'}]
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
              {this.state.currentShelf.map((shelf) => {
                return <Shelf key={shelf.internalName} shelfName={shelf} onMoveBook={this.moveBook} books={this.state.books} />
              })}
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
