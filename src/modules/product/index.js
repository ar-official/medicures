import React from 'react';
import {Route} from "react-router-dom";
import ProductList from '../product/component/productList';
import ProductDetails from './component/productDetails';

const Product = () => {
    return(
        <div>
           <Route exact path='/product' component={ProductList}></Route>
           <Route exact path='/product/:id' component={ProductDetails}></Route>
        </div>
    )
}

export default Product;