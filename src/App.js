import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const { books } = this.props
    return (
      <div className="App">
        <div className="book">{books[0]}</div>
      </div>
    );
  }
}

export default App;
