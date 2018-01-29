import React from 'react'

import {mount} from 'enzyme'

import BookDetail from './BookDetail'

import { MemoryRouter } from 'react-router-dom'
const mountWithRouter = (node) => mount(<MemoryRouter>{node}</MemoryRouter>)

describe('Book Detail', () => {
    it.only('Render a book', () => {
        const book = {title: 'Implementing Microservice', price: 100, id: 1}
        const wrapper = mountWithRouter(<BookDetail book={book} />)

        expect(wrapper.find('.book-detail').length).toEqual(1)
        expect(wrapper.find('.title').text()).toEqual('Implementing Microservice')
        expect(wrapper.find('.book-detail a').at(0).prop('href')).toEqual('/')
    })
})
