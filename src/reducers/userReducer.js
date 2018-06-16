import { FETCH_USERS, FETCH_TODOS } from '../actions/types'

const userReducer = (state = {
    users: [],
    todos: [],
}, action) => {
    switch (action.type) {
        case FETCH_USERS:
            console.log('customerReducer FETCH_USERS:', state, action)
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
        default:
            break
    }

    return state
}

export default userReducer