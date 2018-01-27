import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom'

import BookList from './BookList'
import BookDetail from './BookDetail'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
    this.filterBook = this.filterBook.bind(this)
    this.renderBookDetail = this.renderBookDetail.bind(this)
  }

  filterBook(e) {
    this.setState({
      term: e.target.value
    })
  }

  renderBookDetail(event) {
    const { books } = this.props
    const result = books.filter((book) => book.id === parseInt(event.match.params.id, 10))

    return <BookDetail book={result[0]} />
  }

  render() {
    const { books } = this.props
    const filtered = books.filter((book) => book.title.indexOf(this.state.term) >= 0)
    
    return (
      <div className="container">
        <input type="text" onChange={this.filterBook} placeholder="Type to search..."/>
        <main>
          <Route exact path="/" render={() => <BookList books={filtered} />} />
          <Route path="/books/:id" render={(event) => this.renderBookDetail(event)} />
        </main>
      </div>
    );
  }
}

export default App;
