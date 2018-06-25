import { FETCH_CUSTOMERS, FETCH_POSTS, FETCH_FOLLOWUPS } from '../actions/types'

const customerReducer = (state = {
    customers: [],
    followups: [],
    disable: false
}, action) => {
    switch (action.type) {
        case FETCH_CUSTOMERS:
            state = {
                ...state,
                customers: action.payload
            }
            break

        case FETCH_FOLLOWUPS:
            state = {
                ...state,
                followups: action.payload
            }
            break

        default:
            break
    }

    return state
}

export default customerReducer