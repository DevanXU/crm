import { FETCH_CUSTOMERS, FETCH_FOLLOWUPS } from './types'
import { handleNetworkError } from './networkAction';
import * as uri from './uri'

export const fetchCustomers = () => dispatch => {
    fetch(uri.URI_FETCH_CUSTOMERS)
        .then(handleNetworkError)
        .then(res => res.json())
        .then(customers =>
            dispatch({
                type: FETCH_CUSTOMERS,
                payload: customers
            })).catch(err => console.log('Fetch error: ' + err))
}

export const fetchFollowups = () => dispatch => {
    fetch(uri.URI_FETCH_FOLLOWUPS)
        .then(handleNetworkError)
        .then(res => res.json())
        .then(followups =>
            dispatch({
                type: FETCH_FOLLOWUPS,
                payload: followups
            })).catch(err => console.log('Fetch error: ' + err))
}

export const postFollowups = (followup) => dispatch => {
    fetch(uri.URI_FETCH_FOLLOWUPS, {
        method: 'POST',
        body: JSON.stringify(followup),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
}