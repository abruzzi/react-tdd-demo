import React from 'react'

import {shallow, mount} from 'enzyme'

import BookList from './BookList'

import { MemoryRouter } from 'react-router-dom'
const mountWithRouter = (node) => mount(<MemoryRouter>{node}</MemoryRouter>)

describe('Book List', () => {
    it('Render a book', () => {
        const books = [{title: 'Implementing Microservice', price: 100, id: 1}]
        const wrapper = shallow(<BookList books={books} />)

        expect(wrapper.find('.book').length).toEqual(1)
        expect(wrapper.find('.book .title').text()).toEqual('Implementing Microservice')
        expect(wrapper.find('.book .price').text()).toEqual('100')
    })

    it('Render 2 books', () => {
        const books = [{title: 'Implementing Microservice', price: 100, id: 1}, {title: 'Domain Driven Design', price: 101, id: 2}]
        const wrapper = shallow(<BookList books={books} />)

        expect(wrapper.find('.book').length).toEqual(2)
        expect(wrapper.find('.book .title').at(0).text()).toEqual('Implementing Microservice')
        expect(wrapper.find('.book .price').at(0).text()).toEqual('100')

        expect(wrapper.find('.book .title').at(1).text()).toEqual('Domain Driven Design')
        expect(wrapper.find('.book .price').at(1).text()).toEqual('101')
    })

    it('Book should has a link to its detail', () => {
        const books = [{title: 'Implementing Microservice', price: 100, id: 1}]
        const wrapper = mountWithRouter(<BookList books={books} />)

        const link = wrapper.find('.book a')
        expect(link.length).toEqual(1)
        expect(link.text()).toEqual('View Detail')
        expect(link.prop('href')).toEqual('/books/1')
    })
})