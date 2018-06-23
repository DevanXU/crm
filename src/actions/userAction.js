import { FETCH_CUSTOMERS, FETCH_PHOTOS, FETCH_TODOS } from './types'
import { handleNetworkError } from './networkAction'
import * as uri from './uri'

export const fetchUsers = () => dispatch => {
    fetch(uri.URI_FETCH_USERS)
        .then(handleNetworkError)
        .then(res => res.json())
        .then(users =>
            dispatch({
                type: FETCH_CUSTOMERS,
                payload: users
            })
        ).catch(err => console.log(err))
}

export const fetchPhotos = () => dispatch => {
    fetch(uri.URI_FETCH_PHOTOS)
        .then(handleNetworkError)
        .then(res => res.json())
        .then(photos =>
            dispatch({
                type: FETCH_PHOTOS,
                payload: photos
            })
        ).catch(err => console.log(err))
}

export const fetchTodos = () => dispatch => {
    fetch(uri.URI_FETCH_TODOS)
        .then(handleNetworkError)
        .then(res => res.json())
        .then(todos =>
            dispatch({
                type: FETCH_TODOS,
                payload: todos
            })
        ).catch(err => console.log(err))
}