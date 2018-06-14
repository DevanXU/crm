const customerReducer = (state = {
    name: '',
    users: [],
    disable: false
}, action) => {
    switch (action.type) {
        case 'SET_NAME':
            console.log('customerReducer SET_NAME:', state, action)
            state = {
                ...state,
                name: action.payload
            }
            break
        case 'FETCH_POSTS':
            console.log('customerReducer FETCH_POSTS:', state, action)
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

export default customerReducer