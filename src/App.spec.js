import test from 'ava'
import React from 'react'

import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'

configure({adapter: new Adapter()})

test('Render a book', t => {
	const books = ['Implementing Microservice']
	const wrapper = shallow(<App books={books} />)

	t.is(wrapper.find('.book').length, 1)
	t.is(wrapper.find('.book').text(), 'Implementing Microservice')
})

test('Render 2 books', t => {
  const books = ['Implementing Microservice', 'Domain Driven Design']
  const wrapper = shallow(<App books={books} />)

  t.is(wrapper.find('.book').length, 2)
  t.is(wrapper.find('.book').at(0).text(), 'Implementing Microservice')
  t.is(wrapper.find('.book').at(1).text(), 'Domain Driven Design')
})