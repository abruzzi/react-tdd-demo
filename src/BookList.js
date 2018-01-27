import React from 'react'
import './BookList.css'

function BookList({books}) {
	return (
		<div className="books">
		{
	      books.map((book) => <div className="book" key={book.id}>
	        <h2 className="title">{book.title}</h2>
	        <div className="priceWrapper">Price: $<span className="price">{book.price}</span></div>
	      </div>)
	    }
		</div>
	)
}

export default BookList