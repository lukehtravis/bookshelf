import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import Shelf from './Shelf.js';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: {
      currentlyReading: [{title: "yay", photo: "weee", author: "shakes"}],
      wantToRead: [{title: "ndkjga", photo: "weee", author: "shakes"}],
      read: [{title: "yayboo", photo: "weee", author: "shakes"}]
    }
  };

  render() {
    let bookProp = this.state.books;

    let shelves = [
      {fetchName: 'currentlyReading', outputName: 'Currently Reading'},
      {fetchName: 'read', outputName: "Read"},
      {fetchName: 'wantToRead', outputName: "Want To Read"}
    ]

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {shelves.map((unit) => {
              for (var bookCat in bookObj) {
                if (object.hasOwnProperty(bookCat)) {
                  bookArr = bookObj[bookCat]
                  bookArr.map((book) => {
                    return (book.fetchName === unit.fetchName) ?
                      <div key={unit.fetchName} >
                        <Shelf books={book} shelvesProp={unit} />
                      </div>
                   : null })
                 })}
                }
              }
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp
