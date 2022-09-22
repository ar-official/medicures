import React from 'react';
import { Route } from "react-router-dom";
import ProductList from './component/productList'
import ProductDetails from './component/productDetails'

const ProductPage = () => {
    return (
        <>
            <Route exact path="/product" component={ProductList} ></Route>
            <Route exact path="/product/:id" component={ProductDetails} ></Route>
        </>
    )


}

export default ProductPage;
