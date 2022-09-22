import React from 'react';
import { createBrowserHistory } from 'history'
import { Route } from "react-router-dom";
import { Header, MenuLinks } from "./menu"
import Home from '../home';
import { Container } from 'react-bootstrap';
import '../../assets/css/global.css'
import { Footer} from './footer';
import ProductPage from '../product';


const App = () => {
  const history = createBrowserHistory()
  return (
    <div>
        <Container>
          <Header />
        </Container>
        <MenuLinks />
        <br />
        <div style={{minHeight:'59vh'}}>
            <Route exact path="/" component={Home} ></Route>
            <Container>
                <Route path="/product" component={ProductPage}></Route>
            </Container>
        </div>
        <br />
        <Footer />
    </div>
)
};

export default App;

