import {
    CUST_LOADING_LIST,
    CUST_FETCH_LIST_SUCCESS,
    CUST_FETCH_LIST_FAILURE
} from './actionTypes'

export const custLoadingList = () => ({
    type: CUST_LOADING_LIST
})

export const custFetchListSuccess = (result) => ({
    type: CUST_FETCH_LIST_SUCCESS,
    result
})

export const custFetchListFailure = (error) => ({
    type: CUST_FETCH_LIST_FAILURE,
    error
})