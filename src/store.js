import { createStore, combineReducers, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import customerReducer from './reducers/customerReducer'
import saleReducer from './reducers/saleReducer'

export default createStore(
    combineReducers({ customerReducer, saleReducer }),
    {},
    applyMiddleware(logger)
)