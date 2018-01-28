import React, {Component} from "react";
import "./App.css";

import {Route} from "react-router-dom";

import BookList from "./BookList";
import BookDetail from "./BookDetail";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
      books: []
    }
    this.filterBook = this.filterBook.bind(this)
    this.renderBookDetail = this.renderBookDetail.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:8080/books').then(data => {
        this.setState({ books: data })
    })
  }

  filterBook(e) {
    this.setState({
      term: e.target.value
    })
  }

  renderBookDetail(event) {
    const { books } = this.state
    const result = books.filter((book) => book.id === parseInt(event.match.params.id, 10))

    return <BookDetail book={result[0]} />
  }

  render() {
    const { books } = this.state
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
