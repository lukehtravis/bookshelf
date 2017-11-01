import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'

class Shelf extends Component {

  render() {
    console.log(this.props);
    let {boogieman} = this.props
    return (
      <div>
      {boogieman.map((shelvie) => (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelvie}</h2>
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
