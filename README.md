## React with TDD

```sh
yarn start
```

The application will be started at `http://localhost:3000/`, to make it work, a mock
server should be running at `http://localhost:8080` provies `/books` with the payload like this:

```json
[
    {"title": "Implementing Microservice", "price": 100, "id": 1}, 
    {"title": "Domain Driven Design", "price": 101, "id": 2},
    {"title": "Refactoring", "price": 102, "id": 3}
]
```

### Tech stack

- React 16
- React-router
- Axios [for network]
- Sinon [for mock]
- Enzyme [as test framework]
- Ava [as test runner]
