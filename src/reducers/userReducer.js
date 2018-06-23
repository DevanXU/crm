import { FETCH_CUSTOMERS, FETCH_TODOS, FETCH_PHOTOS } from '../actions/types'

/**
 * Refer to db.json for the data structure of users, todos, photos.
 * 
 * @param {*} state 
 * @param {*} action 
 */
const userReducer = (state = {
    users: [],
    todos: [],
    photos: [],
}, action) => {
    switch (action.type) {
        case FETCH_CUSTOMERS:
            state = {
                ...state,
                users: action.payload
            }
            break
        case FETCH_TODOS:
            state = {
                ...state,
                todos: action.payload
            }
            break
        case FETCH_PHOTOS:
            state = {
                ...state,
                photos: action.payload
            }
            break
        default:
            break
    }

    return state
}

export default userReducer