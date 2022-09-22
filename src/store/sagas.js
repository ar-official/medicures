import { all } from 'redux-saga/effects'
import ProductSaga from '../modules/product/data/saga'



export default function* rootSaga() {
    yield all([
      ProductSaga()
    ])
  } 