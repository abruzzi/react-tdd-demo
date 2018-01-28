import test from 'ava'
import React from 'react'
import sinon from 'sinon'

import {shallow, mount} from 'enzyme'

import App from './App'

import { MemoryRouter, Route } from 'react-router-dom'
const mountWithRouter = (node) => mount(<MemoryRouter>{node}</MemoryRouter>)

test('Search box', t => {
  const wrapper = shallow(<App />)

  t.is(wrapper.find('input[type="text"]').length, 1)
})

test('Routes', t => {
  const wrapper = shallow(<App />)

  t.is(wrapper.find('Route').length, 2)
  t.is(wrapper.find('Route').at(0).prop('path'), '/')
  t.is(wrapper.find('Route').at(1).prop('path'), '/books/:id')
})

test('Fetch data from remote', async t => {
  const books = [{title: 'Implementing Microservice', price: 100, id: 1}, {title: 'Domain Driven Design', price: 101, id: 2}]

  const promise = Promise.resolve(books);
    sinon.stub(global, 'fetch').callsFake(() => promise);

  const wrapper = mountWithRouter(<App />)

  promise.then(() => {
      t.is(wrapper.find('.book').length, 0)
      wrapper.update();
  }).then(() => {
      t.is(wrapper.find('.book').length, 2)
  });
})