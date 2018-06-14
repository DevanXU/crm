import { FETCH_POSTS, SET_NAME } from './types'

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        // fetch('https://localhost:3001/posts')
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        );
};


export const setName = (name) => ({
    type: SET_NAME,
    payload: name
})

