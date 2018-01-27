import test from 'ava'
import React from 'react'

import {shallow, mount} from 'enzyme'

import App from './App'

import { MemoryRouter, Route } from 'react-router-dom'
const mountWithRouter = (node) => mount(<MemoryRouter>{node}</MemoryRouter>)

test('Search box', t => {
  const wrapper = shallow(<App books={[]} />)

  t.is(wrapper.find('input[type="text"]').length, 1)
})

test('Search book based on title', t => {
  const books = [{title: 'Implementing Microservice', price: 100, id: 1}, {title: 'Domain Driven Design', price: 101, id: 2}]
  const wrapper = mountWithRouter(<App books={books} />)

  t.is(wrapper.find('.book').length, 2)
  t.is(wrapper.find('.book .title').at(0).text(), 'Implementing Microservice')
  t.is(wrapper.find('.book .title').at(1).text(), 'Domain Driven Design')


  const input = wrapper.find('input[type="text"]')
  input.simulate('change', {target: {value: 'Domain'}})

  t.is(wrapper.find('.book').length, 1)
})

test('Routes', t => {
  const wrapper = shallow(<App books={[]} />)

  t.is(wrapper.find('Route').length, 2)
  t.is(wrapper.find('Route').at(0).prop('path'), '/')
  t.is(wrapper.find('Route').at(1).prop('path'), '/books/:id')
})