import React, { Component } from 'react'
import BookOption from './bookoption';

class Book extends Component {
    state = {
        img: this.props.book.imageLinks.smallThumbnail
    }
    render() {
        return(
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ 
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${this.state.img})` 
                        }}
                    ></div>
                    <div className="book-shelf-changer">
                        <BookOption bookID={this.props.book.id} shelf={this.props.book.shelf} updateShelf={this.props.updateShelf} />
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                {this.props.book.authors.map((author) => (
                    <div key={this.props.book.id + author} className="book-authors">{author}</div>
                ))}
                
            </div>
        )
    }
}

export default Book;