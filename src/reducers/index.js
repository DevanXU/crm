import { combineReducers } from 'redux'
import customerReducer from './customerReducer'
import saleReducer from './saleReducer'

export default combineReducers({
    customer: customerReducer,
    sale: saleReducer
});
