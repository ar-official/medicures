import React from 'react';
import { Route } from "react-router-dom";
import { Header, MenuLinks } from "./menu"
import Home from '../home';
import { Container } from 'react-bootstrap';
import '../../assets/css/global.css'
import { Footer} from './footer'
import ProductDetails from '../product/component/productDetails';

import Product from '../product/index'

const MainRoute = () => {
    return (
        <div>
            <Header />
            <MenuLinks />
            <br />
            <div >
                <Route exact path='/' component={Home}></Route>
                <Container>
                    <Route exact path='/product' component={Product}></Route>
                    <Route exact path='/product/:id' component={ProductDetails}></Route>
                </Container>
            </div>
            <br />
            <Footer />
        </div>
    )


}

export default MainRoute;