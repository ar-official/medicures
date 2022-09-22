import { combineReducers } from 'redux';

const defaultLoginParams = {
  loginStage: '',
  countryIsFetching:true,
  countryFetched:false,
  productIsFetching:true,
  productFetched:false,
  userCountry:''
}

function products(state = {}, action) {
  if (action.type === 'FETCHED_PRODUCT_LIST') {
      return (action.payload)
  } else {
    return state
  }
}


function userLocation(state = {}, action) {
  if (action.type === 'FETCHED_USER_COUNTRY') {
      return (action.payload)
  } else {
    return state
  }
}


function params(state = defaultLoginParams, action) {
  if (action.type === 'FETCH_USER_COUNTRY') { 
      return {...state, 
        countryIsFetching: true
      }
  }if (action.type === 'FETCHED_USER_COUNTRY') { 
    return {...state, 
      countryIsFetching:false,
      countryFetched:true,
      userCountry:action.payload.country_code
    }
  }if(action.type === 'SET_USER_COUNTRY'){
    return {...state, 
      userCountry:action.payload
    }    
  } 
  if (action.type === 'FETCHED_PRODUCT_LIST') {
    return {...state, 
      productFetched:true
    }
  }else {
    return state
  }
}

const Products = combineReducers({
    products,
    params,
    userLocation
});

export default  Products;

