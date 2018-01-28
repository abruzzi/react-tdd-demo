import React from 'react'
import {Link} from 'react-router-dom'

function BookDetail ({ book }) {
  return (<div className="book-detail">
    <h2 className="title">{book.title}</h2>
    <Link to="/">Back to search results</Link>
  </div>)
}

export default BookDetail