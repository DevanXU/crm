import { combineReducers } from 'redux'
import customerReducer from './customerReducer'
import userReducer from './userReducer'
import saleReducer from './saleReducer'

export default combineReducers({
    customer: customerReducer,
    user: userReducer,
    sale: saleReducer,
});
