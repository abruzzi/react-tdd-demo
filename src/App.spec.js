import test from 'ava'
import React from 'react'

import {shallow, mount, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'

configure({adapter: new Adapter()})

test('Search box', t => {
  const wrapper = shallow(<App books={[]} />)

  t.is(wrapper.find('input[type="text"]').length, 1)
})

test('Search book based on title', t => {
  const books = [{title: 'Implementing Microservice', price: 100}, {title: 'Domain Driven Design', price: 101}]
  const wrapper = mount(<App books={books} />)

  t.is(wrapper.find('.book').length, 2)
  t.is(wrapper.find('.book .title').at(0).text(), 'Implementing Microservice')
  t.is(wrapper.find('.book .title').at(1).text(), 'Domain Driven Design')


  const input = wrapper.find('input[type="text"]')
  input.simulate('change', {target: {value: 'Domain'}})

  t.is(wrapper.find('.book').length, 1)
})

