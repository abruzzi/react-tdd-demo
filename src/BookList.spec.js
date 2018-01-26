import test from 'ava'
import React from 'react'

import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import BookList from './BookList'

configure({adapter: new Adapter()})

test('Render a book', t => {
    const books = [{title: 'Implementing Microservice', price: 100, id: 1}]
    const wrapper = shallow(<BookList books={books} />)

    t.is(wrapper.find('.book').length, 1)
    t.is(wrapper.find('.book .title').text(), 'Implementing Microservice')
    t.is(wrapper.find('.book .price').text(), '100')
})

test('Render 2 books', t => {
  const books = [{title: 'Implementing Microservice', price: 100, id: 1}, {title: 'Domain Driven Design', price: 101, id: 2}]
  const wrapper = shallow(<BookList books={books} />)

  t.is(wrapper.find('.book').length, 2)
  t.is(wrapper.find('.book .title').at(0).text(), 'Implementing Microservice')
  t.is(wrapper.find('.book .price').at(0).text(), '100')

  t.is(wrapper.find('.book .title').at(1).text(), 'Domain Driven Design')
  t.is(wrapper.find('.book .price').at(1).text(), '101')
})