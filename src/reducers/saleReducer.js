const initialState = {
    number: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SALE_NUMBER':
            state = {
                ...state,
                number: state.number + action.payload
            }
            break

        default:
            break
    }
    return state
}
