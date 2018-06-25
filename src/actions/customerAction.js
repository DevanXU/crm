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

