import store, {mockStore} from '../mockStore'
import axios from 'axios'

import {performSearch, fetchBookList} from './actions'

describe('Actions', () => {
    afterEach(() => {
        store.clearActions()
    })

    it('search book action', () => {
        const term = 'Domain'
        const action = performSearch({term})

        expect(action.type).toEqual('PERFORM_SEARCH')
        expect(action.term).toEqual(term)
    })

    it('fetch data from server', () => {
        const data = []

        axios.get = jest.fn().mockImplementation(() => Promise.resolve({data}))

        const expectedActions = [
            {type: 'FETCH_BOOK_LIST_PENDING'},
            {type: 'FETCH_BOOK_LIST_FULFILLED', payload: data}
        ]

        const mocked = mockStore({})
        return mocked.dispatch(fetchBookList()).then(() => {
            expect(mocked.getActions()).toEqual(expectedActions)
        })
    })

    it('fetch data from server with error', () => {
        const err = {message: 'Internal Error'}
        axios.get = jest.fn().mockImplementation(() => Promise.reject(err))

        const expectedActions = [
            {type: 'FETCH_BOOK_LIST_PENDING'},
            {type: 'FETCH_BOOK_LIST_REJECTED', err}
        ]

        const mocked = mockStore({})
        return mocked.dispatch(fetchBookList()).then(() => {
            expect(mocked.getActions()).toEqual(expectedActions)
        })
    })
})
