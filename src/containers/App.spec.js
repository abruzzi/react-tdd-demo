import React from 'react'
import {shallow} from 'enzyme'
import { Route } from 'react-router-dom'
import axios from 'axios'
import App from './App'

describe('App', () => {
    beforeEach(() => {
        axios.get = jest.fn().mockImplementation(() => Promise.resolve({data: []}))
    })

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
})
