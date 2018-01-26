import test from 'ava'
import React from 'react'

import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'

configure({adapter: new Adapter()})

test('Render a book list', t => {
	const books = ['Implementing Microservice']
	const wrapper = shallow(<App books={books} />)

	t.is(wrapper.find('.book').length, 1)
	t.is(wrapper.find('.book').text(), 'Implementing Microservice')
})

test('Render another book list', t => {
  const books = ['Domain Driven Design']
  const wrapper = shallow(<App books={books} />)

  t.is(wrapper.find('.book').length, 1)
  t.is(wrapper.find('.book').text(), 'Domain Driven Design')
})