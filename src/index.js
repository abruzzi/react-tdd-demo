import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const books = ['Implementing Microservice', 'Domain Driven Design']
ReactDOM.render(<App books={books} />, document.getElementById('root'));