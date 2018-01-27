import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const books = [{title: 'Implementing Microservice', price: 100, id: 1}, {title: 'Domain Driven Design', price: 101, id: 2}, {title: 'Refactoring', price: 102, id: 3}]
ReactDOM.render(<App books={books} />, document.getElementById('root'));