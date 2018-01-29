import {performSearch, fetchBookList} from './actions'

describe('Actions', () => {
    it('search book action', () => {
        const term = 'Domain'
        const action = performSearch({term})

        expect(action.type).toEqual('PERFORM_SEARCH')
        expect(action.term).toEqual(term)
    })

    xit('fetch data from server', () => {
        const action = fetchBookList()

        expect(action.type).toEqual('FETCH_BOOK_LIST')
    })
})
