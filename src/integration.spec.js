import test from 'ava'
import React from 'react'
import sinon from 'sinon'
import axios from 'axios'

import {mount} from 'enzyme'

import App from './App'

import { MemoryRouter } from 'react-router-dom'
const mountWithRouter = (node) => mount(<MemoryRouter>{node}</MemoryRouter>)

test('Search book based on title', async t => {
    const books = {data: [{title: 'Implementing Microservice', price: 100, id: 1}, {title: 'Domain Driven Design', price: 101, id: 2}]}
    const promise = Promise.resolve(books);

    sinon.stub(axios, 'get').callsFake(() => promise)
    const wrapper = mountWithRouter(<App />)

    promise.then(() => {
        wrapper.update();
    }).then(() => {
        t.is(wrapper.find('.book').length, 2)
        t.is(wrapper.find('.book .title').at(0).text(), 'Implementing Microservice')
        t.is(wrapper.find('.book .title').at(1).text(), 'Domain Driven Design')

        const input = wrapper.find('input[type="text"]')
        input.simulate('change', {target: {value: 'Domain'}})

        t.is(wrapper.find('.book').length, 1)
    });
})
