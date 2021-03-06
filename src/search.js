import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Search extends Component {
    state = {
        query: ''
    }
    updateQuery = (query) => {

    }
    render() {
        return(
            <div className="search-books">
                <div className="search-books-bar">
                <Link
                  to="/">
                    <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    
                    <input 
                        type="text" 
                        placeholder="Search by title or author"
                        value={this.state.query}
                        />

                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                 {/* {bookshelf component} */}
                </ol>
                </div>
            </div>
        )
    }
}

export default Search;