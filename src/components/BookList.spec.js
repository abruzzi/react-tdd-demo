import test from 'ava'
import React from 'react'

import {shallow, mount} from 'enzyme'

import BookList from './BookList'

import { MemoryRouter } from 'react-router-dom'
const mountWithRouter = (node) => mount(<MemoryRouter>{node}</MemoryRouter>)

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

test('Book should has a link to its detail', t => {
    const books = [{title: 'Implementing Microservice', price: 100, id: 1}]
    const wrapper = mountWithRouter(<BookList books={books} />)

    const link = wrapper.find('.book a') 
    t.is(link.length, 1)
    t.is(link.text(), 'View Detail')
    t.is(link.prop('href'), '/books/1')
})