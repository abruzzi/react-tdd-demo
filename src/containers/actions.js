export const performSearch = ({term}) => {
    return {
        type: 'PERFORM_SEARCH',
        term
    }
}

const fetchingBookList = () => {

}

const fetchBookListSuccess = (books) => {
    return {
        type: 'FETCH_BOOK_LIST_SUCCESS',
        books
    }
}


const fetchBookListFailed = (err) => {
    return {
        type: 'FETCH_BOOK_LIST_FAILED',
        err
    }
}

export const fetchBookList = () => {
    return dispatch => {
        dispatch(fetchingBookList())
        return axios.get('http://localhost:8080/books').then((res) => {
            dispatch(fetchBookListSuccess(res.data))
        }).catch((err) => {
            dispatch(fetchBookListFailed(err))
        })
    }
}