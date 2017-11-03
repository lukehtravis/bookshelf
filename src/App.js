import React from 'react';
import * as BooksAPI from './BooksAPI'
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
    },
  };

  componentDidMount() {
  BooksAPI.getAll().then((booksAPI) => {
    this.setState({ booksAPI })
    console.log(this.state.booksAPI[0].authors[0]);
  })};

  render() {
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
             return  <div key={unit.fetchName} >
                <Shelf books={this.state.books[unit.fetchName]} shelvesProp={unit} />
              </div>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp
