import { FETCH_USERS, FETCH_PHOTOS, FETCH_TODOS } from './types'

export const fetchUsers = () => dispatch => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    fetch('http://localhost:3001/users')
        .then(res => res.json())
        .then(users =>
            dispatch({
                type: FETCH_USERS,
                payload: users
            })
        );
}

export const fetchPhotos = () => dispatch => {
    fetch('http://localhost:3001/photos')
        .then(res => res.json())
        .then(photos =>
            dispatch({
                type: FETCH_PHOTOS,
                payload: photos
            })
        )
}

export const fetchTodos = () => dispatch => {
    fetch('http://localhost:3001/todos')
        .then(res => res.json())
        .then(todos =>
            dispatch({
                type: FETCH_TODOS,
                payload: todos
            })
        )
}