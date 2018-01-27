import test from 'ava'
import React from 'react'

import {shallow, mount} from 'enzyme'

import BookDetail from './BookDetail'

import { MemoryRouter } from 'react-router-dom'
const mountWithRouter = (node) => mount(<MemoryRouter>{node}</MemoryRouter>)

test('Render a book', t => {
    const book = {title: 'Implementing Microservice', price: 100, id: 1}
    const wrapper = mountWithRouter(<BookDetail book={book} />)

    t.is(wrapper.find('.book-detail').length, 1)
    t.is(wrapper.find('.title').text(), 'Implementing Microservice')
    t.is(wrapper.find('.book-detail a').at(0).prop('href'), '/')
})