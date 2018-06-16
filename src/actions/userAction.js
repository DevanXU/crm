import { FETCH_USERS, FETCH_PHOTOS, FETCH_TODOS } from './types'
import * as uri from './uri'

export const fetchUsers = () => dispatch => {
    fetch(uri.URI_FETCH_USERS)
        .then(res => res.json())
        .then(users =>
            dispatch({
                type: FETCH_USERS,
                payload: users
            })
        );
}

export const fetchPhotos = () => dispatch => {
    fetch(uri.URI_FETCH_PHOTOS)
        .then(res => res.json())
        .then(photos =>
            dispatch({
                type: FETCH_PHOTOS,
                payload: photos
            })
        )
}

export const fetchTodos = () => dispatch => {
    fetch(uri.URI_FETCH_TODOS)
        .then(res => res.json())
        .then(todos =>
            dispatch({
                type: FETCH_TODOS,
                payload: todos
            })
        )
}