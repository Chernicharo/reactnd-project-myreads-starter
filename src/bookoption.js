import React, { Component } from 'react'

class BookOption extends Component {
    state = {
        id: {
            id: this.props.bookID
        }
    }
    handleChange(event) {
        this.props.updateShelf(this.state.id, event);
    }
    render() {
        return(
            <select onChange={(event) => this.handleChange(event.target.value) } defaultValue={this.props.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        )
    }
}

export default BookOption;