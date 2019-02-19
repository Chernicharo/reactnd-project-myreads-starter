import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './search'
import BookShelf from './bookshelf'
import Loader  from 'react-loader'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: [
      {
        id:'s3HtCgAAQBAJ',
        title: 'The Hatred of Poetry',
        authors: ['Ben Lerner'],
        thumbnail: 'http://books.google.com/books/content?id=s3HtCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
      }
    ],
    loaded: false, 
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
  componentDidMount() {

    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books,
          loaded: true
        }))
        console.log('books', this.state.books)
      })
  }
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Loader loaded={this.state.loaded}>
                <div>
                    <BookShelf 
                      books={this.state.books}
                      type="currentlyReading"
                    />
                    <BookShelf 
                      books={this.state.books}
                      type="wantToRead"
                    />
                    <BookShelf 
                      books={this.state.books}
                      type="read"
                    />
                </div>
              </Loader>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
