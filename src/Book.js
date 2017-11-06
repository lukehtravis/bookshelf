import React, { Component } from 'react'
import AssignBookToShelf from './AssignBookToShelf.js'

class Book extends Component {
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.individualBook.imageLinks.thumbnail ? this.props.individualBook.imageLinks.thumbnail : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif'})` }}></div>
            <AssignBookToShelf bookProps={this.props.individualBook} />
          </div>
          <div className="book-title">{this.props.individualBook.title}</div>
          <div className="book-authors">{this.props.individualBook.author}</div>
        </div>
      </li>
    )
  }
}

export default Book
