import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const { books } = this.props
    return (
      <div className="App">
        {
          books.map((book) => <div className="book">{book}</div>)
        }
      </div>
    );
  }
}

export default App;
