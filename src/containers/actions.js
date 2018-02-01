import axios from 'axios'

export const performSearch = ({term}) => {
    return {
        type: 'PERFORM_SEARCH',
        term
    }
}

export const fetchBookList = () => {
    return dispatch => {
        dispatch({type: 'FETCH_BOOK_LIST_PENDING'})
        return axios.get('http://localhost:8080/books').then((res) => {
            dispatch({type: 'FETCH_BOOK_LIST_FULFILLED', payload: res.data})
        }).catch((err) => {
            dispatch({type: 'FETCH_BOOK_LIST_REJECTED', err})
        })
    }
}