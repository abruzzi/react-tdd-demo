import axios from 'axios'

export const performSearch = ({term}) => {
    return {
        type: 'PERFORM_SEARCH',
        term
    }
}

export const fetchBookList = () => {
    return {
        type: 'FETCH_BOOK_LIST',
        payload: axios.get('http://localhost:8080/books')
    }
}