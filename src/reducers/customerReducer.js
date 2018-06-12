const customerReducer = (state = {
    name: '',
    disable: false
}, action) => {
    console.log('customerReducer:', state, action)
    switch (action.type) {
        case 'SET_NAME':
            state = {
                ...state,
                name: action.payload
            }
            break
        default:
            break
    }

    return state
}

export default customerReducer