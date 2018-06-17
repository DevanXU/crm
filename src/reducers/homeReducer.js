import { FETCH_APPS } from '../actions/types'

/**
 * Refer to db.json for the data structure of users, todos, photos.
 * 
 * @param {*} state 
 * @param {*} action 
 */
const homeReducer = (state = {
    apps: [],
}, action) => {
    switch (action.type) {
        case FETCH_APPS:
            state = {
                ...state,
                apps: action.payload
            }
            break
        default:
            break
    }

    return state
}

export default homeReducer