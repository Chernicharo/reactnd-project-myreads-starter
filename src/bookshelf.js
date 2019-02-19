import React, { Component } from 'react'
import Book from './book'

class BookShelf extends Component {
    // state = {
    //     books: [],
    //     type: ""
    // }
    // componentDidMount() {
    //     this.setState(() => ({
    //         books: this.props.books,
    //         type: this.props.type
    //     }))
    // }
    render() {
        return(
            <div className="bookshelf">
             {/* TODO: dinamic titles */}
                <h2 className="bookshelf-title">Currently Reading</h2> 
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.filter((book) => (
                            book.shelf === this.props.type
                        )).map((book)=> (
                            <li
                                key={book.id}
                            >
                                <Book book={book} />
                                {console.log('monted book', book)}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;