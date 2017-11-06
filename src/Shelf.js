import React, { Component } from 'react';
import Book from './Book.js'
// import * as BooksAPI from './BooksAPI'

class Shelf extends Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelvesProp.outputName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => {
              return <Book assignFunc={this.props.assignFunc} individualBook={book} />
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
