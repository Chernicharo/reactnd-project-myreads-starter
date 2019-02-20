import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './search'
import BookShelf from './bookshelf'
import Loader  from 'react-loader'
import { Route, Link } from 'react-router-dom'
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
    idTest: {
      id: 'nggnmAEACAAJ'
    }
  }
  updateShelf = (bookID,shelf) => {
    BooksAPI.update(bookID,shelf)
      .then((data) => (
        console.log('update data', data)
      ))
  }
  componentDidMount() {

    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books,
          loaded: true
        }))
        console.log('books', this.state.books)
      });
  }

  
  render() {
    return (
      <div className="app">
          <Route path='/search' render={() => (
            <Search />
          )}/>
          <Route exact path='/' render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <button onClick={this.updateShelf( this.state.idTest,'currentlyReading')}>update test</button>
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
                <Link
                  to="/search">
                  <button >Add a book</button>
                </Link>
              </div>
            </div>
          )}/>
      </div>
    )
  }
}

export default BooksApp
