import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import Products from '../modules/product/data/reducers'


const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    Products
})

export default rootReducer