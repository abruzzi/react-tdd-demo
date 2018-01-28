import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

import {BrowserRouter as Router} from 'react-router-dom'

const books = [{title: 'Implementing Microservice', price: 100, id: 1}, {title: 'Domain Driven Design', price: 101, id: 2}, {title: 'Refactoring', price: 102, id: 3}]

ReactDOM.render(<Router>
	<App books={books} />
</Router>, document.getElementById('root'));