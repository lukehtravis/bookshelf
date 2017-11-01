import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'

class Shelf extends Component {

  render() {
    console.log(this.props);
    let shelves = this.props.shelvesProp;
    return (
      <div>
      {shelves.map((unit) => (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{unit}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <li>
              </li>
            </ol>
          </div>
        </div>
      ))}
      </div>
    )
  }
}

export default Shelf
