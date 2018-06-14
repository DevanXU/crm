import { FETCH_USERS } from '../actions/types'

const userReducer = (state = {
    users: [],
}, action) => {
    switch (action.type) {
        case FETCH_USERS:
            console.log('customerReducer FETCH_USERS:', state, action)
            state = {
                ...state,
                users: action.payload
            }
            break
        default:
            break
    }

    return state
}

export default userReducer