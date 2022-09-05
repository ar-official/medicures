import React from 'react';
import { Route } from "react-router-dom";
import { Header, MenuLinks } from "./menu"
import Home from '../home';
import { Container } from 'react-bootstrap';
import '../../assets/css/global.css'
import { Footer} from './footer'
import ProductList from '../product/component/productList';
import ProductDetails from '../product/component/productDetails';

const MainRoute = () => {
    return (
        <div>
            <Header />
            <MenuLinks />
            <br />
            <div >
                <Route exact path="/" component={Home} ></Route>
                <Container>
                    <Route exact path="/medicures/product" component={ProductList}></Route>
                    <Route exact path="/medicures/product/:id" component={ProductDetails}></Route>
                </Container>
            </div>
            <br />
            <Footer />
        </div>
    )


}

export default MainRoute;
