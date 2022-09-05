import React, { useState } from 'react';
import { Link} from "react-router-dom";
import { createBrowserHistory } from 'history'
import logo from '../../assets/img/logo.PNG';
import { Row, Col, Container} from 'react-bootstrap';
import '../../assets/css/menu.css'
import {data} from '../product/data/data'
import { redirectToProductDetail } from './redirectFun';


export const Header = () => {
  const [filteredData, setFilteredData] = useState();
  const handleChange=(event)=>{
    let value = event.target.value
    let products = data.product
    let dataf=[]
    if(value){
    products.forEach((item)=>{
      let itemName = item.name.toLowerCase();
      let fvalue = value.toLowerCase();
      if(itemName.includes(fvalue)){
        dataf.push(item)
      }
    })
    setFilteredData(dataf)
  }else{
    setFilteredData()
  }
  }
  
  return (
    <div className="menu align-items-center">
      <Container>
        <Row>
          <Col xs={8} className=''>
            <Link to="/">
              <img src={logo} style={{height:'38px'}}/>
            </Link>
          </Col>
          <Col md={4} xs={12} className="text-right dropdown">
            <input 
              onChange={handleChange} 
              className="form-control" 
              placeholder="Search for product, brand , services" 
              type="text" 
              name="search"
            />
            <div className='dropdown-content '>
              {!filteredData && <>Please type any keyword  </>}
              {filteredData && filteredData.map((item, index) => (
                <Row key={index} className='filtered-data' onClick={()=>redirectToProductDetail(item.id)}>
                  <Col xs={2} className='filtered-data-img'>
                    <img src={item.img} />
                  </Col>
                  <Col xs={10} className='filtered-data-text'>{item.name}</Col>
                </Row>
              ))

              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export const MenuLinks = (props) => {
  const history = createBrowserHistory()
  const currLink= history.location.pathname
  const menuItems = [
    {
        "menuId": 0,
        'menuItem': 'Home',
        'menuLink': '/',
    },
    {
        "menuId": 1,
        'menuItem': 'Products',
        'menuLink': '/product',
    }
  ];
  return (
    <div className="menu-links" >
      <Container >  
      {menuItems.map((item, index) =>
        (<Link 
          key= {index}
          className={ currLink === item.menuLink ? 'active' : ''} 
          to={item.menuLink}>{item.menuItem}
        </Link>)
      )}
      </Container>
    </div>
  )
}

