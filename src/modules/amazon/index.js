import React from 'react';
import { Route } from "react-router-dom";
import ProductList from './component/productList'

const AmazonPage = () => {
    return (
        <>
            <Route exact path="/amzn" component={ProductList} ></Route>
        </>
    )


}

export default AmazonPage;
