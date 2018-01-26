import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
    this.filterBook = this.filterBook.bind(this)
  }

  filterBook(e) {
    this.setState({
      term: e.target.value
    })
  }

  render() {
    const { books } = this.props
    const filtered = books.filter((book) => book.title.indexOf(this.state.term) >= 0)
    
    return (
      <div className="App">
        <input type="text" onChange={this.filterBook}/>
        {
          filtered.map((book) => <div className="book">
            <h2 className="title">{book.title}</h2>
            <span className="price">{book.price}</span>
          </div>)
        }
      </div>
    );
  }
}

export default App;
