import { POST_NETWORK_ERROR } from './types'

export const postNetworkError = (error) => dispatch => {
    dispatch({
        type: POST_NETWORK_ERROR,
        payload: error
    })
}

export const handleNetworkError = (res) => {
    if (!res.ok) {
        console.log('Network has some problem!')
        throw Error(res.statusText)
    } else {
        console.log('Network is Ok.')
    }

    return res
}