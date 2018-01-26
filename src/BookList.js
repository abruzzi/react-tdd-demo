import React from 'react'

function BookList({books}) {
	return (
		<div className="books">
		{
	      books.map((book) => <div className="book">
	        <h2 className="title">{book.title}</h2>
	        <span className="price">{book.price}</span>
	      </div>)
	    }
		</div>
	)
}

export default BookList