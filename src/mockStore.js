import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import configureMockStore from 'redux-mock-store'

const initialState = {}
const middleware = [
    thunk,
    promiseMiddleware()
]

export const mockStore = configureMockStore(middleware)
const store = mockStore(initialState)

export default store