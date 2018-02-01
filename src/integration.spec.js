import React from 'react'
import {mount} from 'enzyme'
import axios from 'axios'

import App from './containers/App'

import { MemoryRouter } from 'react-router-dom'
const mountWithRouter = (node) => mount(<MemoryRouter>{node}</MemoryRouter>)

const flushPromises = () => new Promise(resolve => setImmediate(resolve))

describe('Integration tests', () => {
    it('Search book based on title', async () => {
        const books = [
            {"title": "Implementing Microservice", "price": 100, "id": 1},
            {"title": "Domain Driven Design", "price": 102, "id": 2}
        ]

        axios.get = jest.fn().mockImplementation(() => Promise.resolve({data: books}))

        const wrapper = mountWithRouter(<App />)
        await flushPromises()
        wrapper.update()

        expect(wrapper.find('.book').length).toEqual(2)
        expect(wrapper.find('.book .title').at(0).text()).toEqual('Implementing Microservice')
        expect(wrapper.find('.book .title').at(1).text()).toEqual('Domain Driven Design')

        const input = wrapper.find('input[type="text"]')
        input.simulate('change', {target: {value: 'Domain'}})

        expect(wrapper.find('.book').length).toEqual(1)
        expect(wrapper.find('.book .title').at(0).text()).toEqual('Domain Driven Design')
    })
})

