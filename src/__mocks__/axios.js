import {data as books} from './books.json'

const BOOKS_ENDPOINT = 'http://localhost:8080/books';

module.exports = {
    get: jest.fn((url) => {
        switch (url) {
            case BOOKS_ENDPOINT:
                return Promise.resolve({
                    data: books
                });
        }
    })
}