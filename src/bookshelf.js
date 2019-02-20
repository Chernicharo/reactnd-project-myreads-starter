import React, { Component } from 'react'
import Book from './book'

class BookShelf extends Component {
    shelfTitle(type){
        switch (type) {
            case "wantToRead":
                return "Want To Read"
            case "currentlyReading":
                return "Currently Reading"
            case "read":
                return "Read"
            default:
                break;
        }
    }
    render() {
        return(
            <div className="bookshelf">
             {/* TODO: dinamic titles */}
                <h2 className="bookshelf-title">{this.shelfTitle(this.props.type)}</h2> 
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.filter((book) => (
                            book.shelf === this.props.type
                        )).map((book)=> (
                            <li
                                key={book.id}
                            >
                                <Book book={book} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;