import { FETCH_USERS } from './types'

export const fetchUsers = () => dispatch => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    fetch('http://localhost:3001/users')
        .then(res => res.json())
        .then(users =>
            dispatch({
                type: FETCH_USERS,
                payload: users
            })
        );
};