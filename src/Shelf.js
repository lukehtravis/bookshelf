import React, { Component } from 'react';
import Book from './Book.js'

class Shelf extends Component {

  render() {
    const internalName = this.props.shelfName.internalName
    const displayName = this.props.shelfName.displayName
    return (
      <div className={internalName}>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{displayName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map((book) => {
                return book.shelf ===  internalName ? <Book key={book.id} onMoveBook={this.props.onMoveBook} individualBook={book} /> :  null
              })}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Shelf
