import React, { Component } from 'react';
import Book from './Book.js'

class Shelf extends Component {

  render() {
    return (
      <div className={this.props.shelfName.internalName}>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelfName.displayName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map((book) => {
                return book.shelf ===  this.props.shelfName.internalName ? <Book key={book.id} onMoveBook={this.props.onMoveBook} individualBook={book} /> :  null
              })}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Shelf
