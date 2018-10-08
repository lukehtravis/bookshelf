import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'
import { Link } from 'react-router-dom'

class SearchForBook extends Component {

  state = {
    query: '',
    searchedBooks: [],
    books: this.props.stateProp
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    this.setState({books: this.props.stateProp})
    this.setState({searchedBooks: []})
    BooksAPI.search(query,30).then((books) => {
      if(!!books){
        if(books.length>0){
          let results = books.map((book) => {
            const existingBook = this.state.books.find((b) => b.id === book.id)
            book.shelf = !!existingBook ? existingBook.shelf : "none"
            return book
          });
          this.setState({ searchedBooks: results })
        }
      }
    }).catch((error) => {
        this.setState({searchedBooks: []})
        console.log(error);
      })
    };
  render() {
    const {query} = this.state.query

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.searchedBooks.map((book) => {
                return <Book key={book.id} onMoveBook={this.props.onMoveBook} individualBook={book} />
              })
            }
          </ol>
        </div>
      </div>
    )
  }

}

export default SearchForBook
