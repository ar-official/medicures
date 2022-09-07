import React from 'react';
import { Route } from "react-router-dom";
import { Header, MenuLinks } from "./menu"
import Home from '../home';
import { Container } from 'react-bootstrap';
import '../../assets/css/global.css'
import { Footer} from './footer'
import ProductList from '../product/component/productList';
import ProductDetails from '../product/component/productDetails';
import { HashRouter } from 'react-router-dom'

const MainRoute = () => {
    return (
        <div>
            <Header />
            <MenuLinks />
            <br />
            <div >
            <HashRouter>
                <Route exact path="/" component={Home} ></Route>
                <Container>
                    <Route exact path="/product" component={ProductList}></Route>
                    <Route exact path="/product/:id" component={ProductDetails}></Route>
                </Container>
            </HashRouter>
            </div>
            <br />
            <Footer />
        </div>
    )


}

export default MainRoute;
