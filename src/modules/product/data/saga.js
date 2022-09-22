import { call, takeEvery,all, put } from 'redux-saga/effects'
import {fetchedUserCountry,fetchedProductList} from './actions'
import axios from 'axios';
import { data as productData } from '../../data/data';
import {URL, getHeaderJWT} from '../../../store/path'

// fetching  user location

function* requestUserCountry() {
  console.log('hi')
  yield takeEvery('FETCH_USER_COUNTRY',requestUserCountryDetail)
}
  
function* requestUserCountryDetail(){
    let { data } = yield call(requestUserCountryAPI)
    yield put (fetchedUserCountry(data))
}

function requestUserCountryAPI(data) {
  return axios.get('https://ipapi.co/json/', getHeaderJWT(), {crossDomain: true})
}

//#endregion

// fetching products
function* fetchProduct() {
  yield takeEvery('FETCH_USER_COUNTRY',requestProduct)
}
  
function* requestProduct(){
    yield put (fetchedProductList(productData.product))
}

//#endregion



const sagaErrorMessage = (error, action) => {
    console.group("Saga Error:"+action.type)
    console.log(error)
    console.groupEnd()
}

export default function* ProductSaga() {
    yield all([
      requestUserCountry(),
      fetchProduct()
    ])
  }  