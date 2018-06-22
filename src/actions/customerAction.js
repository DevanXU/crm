import { FETCH_POSTS, SET_NAME } from './types'
import { handleNetworkError } from './networkAction';
import * as uri from './uri'

export const fetchPosts = () => dispatch => {
    fetch(uri.URI_FETCH_POSTS)
        .then(handleNetworkError)
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        ).catch(err => console.log('Fetch error: ' + err))
}


export const setName = (name) => ({
    type: SET_NAME,
    payload: name
})

