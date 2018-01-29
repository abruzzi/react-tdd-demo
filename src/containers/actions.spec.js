import store from '../mockStore'
import nock from 'nock'

import {performSearch, fetchBookList} from './actions'

describe('Actions', () => {
    afterEach(() => {
        nock.cleanAll()
        store.clearActions()
    })

    it('search book action', () => {
        const term = 'Domain'
        const action = performSearch({term})

        expect(action.type).toEqual('PERFORM_SEARCH')
        expect(action.term).toEqual(term)
    })

    it('fetch data from server', (done) => {
        const data = []

        nock('http://localhost:3000')
            .get('/books')
            .reply(200, { data })

        store.subscribe(() => {
            const dispatchedActions = store.getActions();

            if (dispatchedActions.length === 2) {
                expect(dispatchedActions[0].type).toEqual('FETCH_BOOK_LIST_PENDING')
                expect(dispatchedActions[1].type).toEqual('FETCH_BOOK_LIST_FULFILLED')

                done()
            }
        })

        store.dispatch(fetchBookList())
    })

    xit('fetch data from server with error', (done) => {
        nock('http://localhost:3000')
            .get('/books')
            .replyWithError('Internal Error')

        store.subscribe(() => {
            const dispatchedActions = store.getActions();

            if (dispatchedActions.length === 2) {
                expect(dispatchedActions[0].type).toEqual('FETCH_BOOK_LIST_PENDING')
                expect(dispatchedActions[1].type).toEqual('FETCH_BOOK_LIST_REJECTED')

                done()
            }
        })

        store.dispatch(fetchBookList())
    })
})
