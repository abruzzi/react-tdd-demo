import test from 'ava'
import {performSearch, fetchBookList} from './actions'

test('search book action', t => {
    const term = 'Domain'
    const action = performSearch({term})

    t.is(action.type, 'PERFORM_SEARCH')
    t.is(action.term, term)
})

test('fetch data from server', t => {
    const action = fetchBookList()

    t.is(action.type, 'FETCH_BOOK_LIST')
})