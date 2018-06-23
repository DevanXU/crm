import { FETCH_CUSTOMERS, FETCH_POSTS } from '../actions/types'

const customerReducer = (state = {
    posts: [],
    customers: [],
    disable: false
}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            state = {
                ...state,
                posts: action.payload
            }
            break
        case FETCH_CUSTOMERS:
            state = {
                ...state,
                customers: action.payload
            }
            break
        default:
            break
    }

    return state
}

export default customerReducer