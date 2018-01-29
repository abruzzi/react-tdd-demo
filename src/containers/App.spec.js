import React from 'react'
import {shallow, mount} from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom'

import App from './App'

const mountWithRouter = (node) => mount(<MemoryRouter>{node}</MemoryRouter>)

describe('App', () => {
    it('Search box', () => {
        const wrapper = shallow(<App />)

        expect(wrapper.find('input[type="text"]').length).toBe(1)
    })

    it('Routes', () => {
        const wrapper = shallow(<App />)

        expect(wrapper.find('Route').length).toBe(2)
        expect(wrapper.find('Route').at(0).prop('path')).toEqual('/')
        expect(wrapper.find('Route').at(1).prop('path')).toEqual('/books/:id')
    })

    const flushPromises = () => new Promise(resolve => setImmediate(resolve))

    it('Fetch data from remote', async () => {
        const wrapper = mountWithRouter(<App />)
        await flushPromises()
        wrapper.update()
        expect(wrapper.find('.book').length).toEqual(2)
    })
})
