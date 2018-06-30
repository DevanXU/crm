import {
    CUST_LOADING_LIST,
    CUST_FETCH_LIST_SUCCESS,
    CUST_FETCH_LIST_FAILURE
} from './actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case CUST_LOADING_LIST: {
            break;
        }

        case CUST_FETCH_LIST_SUCCESS: {
            break;
        }

        case CUST_FETCH_LIST_FAILURE: {
            break;
        }

        default:
            return state;
    }
}