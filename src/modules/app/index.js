import React from 'react';
import { Route } from "react-router-dom";
import { Header, MenuLinks } from "./menu"
import Home from '../home';
import { Container } from 'react-bootstrap';
import '../../assets/css/global.css'
import { Footer} from './footer'
import { Url, Constant } from './Url';
import ProductList from '../product/component/productList';
import ProductDetails from '../product/component/productDetails';

const MainRoute = () => {
    return (
        <div>
            <Header />
            <MenuLinks />
            <br />
            <div >
                <Route exact path={Url} component={Home} ></Route>
                <Container>
                    <Route exact path={Constant.productListUrl} component={ProductList}></Route>
                    <Route exact path={Constant.productDetailUrl} component={ProductDetails}></Route>
                </Container>
            </div>
            <br />
            <Footer />
        </div>
    )


}

export default MainRoute;