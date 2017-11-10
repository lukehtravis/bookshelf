import React, { Component } from 'react'
import AssignBookToShelf from './AssignBookToShelf.js'

class Book extends Component {

  handleChange(e, book) {
    let option = e.target.querySelectorAll('option[value="'+ e.target.value +'"]')
    let elementToChange = option[0]
    elementToChange.setAttribute('selected', true)
    this.props.onMoveBook(book, e.target.value)
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.individualBook.imageLinks.thumbnail ? this.props.individualBook.imageLinks.thumbnail : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif'})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(e) => this.handleChange(e, this.props.individualBook)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.individualBook.title}</div>
          <div className="book-authors">{this.props.individualBook.author}</div>
        </div>
      </li>
    )
  }
}

export default Book
