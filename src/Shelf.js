import React, { Component } from 'react';
import Book from './Book.js'
// import * as BooksAPI from './BooksAPI'

class Shelf extends Component {

  render() {
    console.log(this.props);
    let shelf = this.props.shelvesProp;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.outputName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Book />
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
