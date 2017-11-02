import React, { Component } from 'react';
import Book from './Book.js'
// import * as BooksAPI from './BooksAPI'

class Shelf extends Component {

  render() {
    console.log(this.props);
    let shelves = this.props.shelvesProp;
    return (
      <span>
      {shelves.map((unit) => (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{unit.outputName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <Book />
            </ol>
          </div>
        </div>
      ))}
      </span>
    )
  }
}

export default Shelf
