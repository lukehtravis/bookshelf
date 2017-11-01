import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'

class Shelf extends Component {

console.log(this.props);

  render() {
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title"></h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
