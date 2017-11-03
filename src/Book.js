import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import AssignBookToShelf from './AssignBookToShelf.js'

class Books extends Component {
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")' }}></div>
            <AssignBookToShelf />
          </div>
          <div className="book-title">{this.props.individualBook.title}</div>
          <div className="book-authors">{this.props.individualBook.author}</div>
        </div>
      </li>
    )
  }
}

export default Books
