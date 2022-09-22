import * as type from './type'

export function fetchProductList() {
    return {
        type : type.FETCH_PRODUCT_LIST,
    };
}

export function fetchedProductList(data) {
    return {
        type : type.FETCHED_PRODUCT_LIST,
        payload:data
    };
}

export function fetchUserCountry() {
    return {
        type : type.FETCH_USER_COUNTRY,
    };
}

export function fetchedUserCountry(data) {
    return {
        type : type.FETCHED_USER_COUNTRY,
        payload: data
    };
}

export function setUserCountry(data) {
    return {
        type : type.SET_USER_COUNTRY,
        payload: data
    };
}