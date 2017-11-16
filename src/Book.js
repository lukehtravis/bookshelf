import React, { Component } from 'react'

class Book extends Component {

  handleChange(e, book) {
    this.props.onMoveBook(book, e.target.value)
  }

  render() {

    let thumbnail
    if ('imageLinks' in this.props.individualBook) {
      thumbnail = this.props.individualBook.imageLinks.thumbnail
    } else  {
      thumbnail = 'https://books.google.com/googlebooks/images/no_cover_thumb.gif'
    }

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(e) => this.handleChange(e, this.props.individualBook)}>
                <option value="moveto" disabled>Move to...</option>
                <option value="none">None</option>
                <option value="wantToRead">Want to Read</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="read">Read</option>
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
