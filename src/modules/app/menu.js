import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { createBrowserHistory } from 'history'
import logo from '../../assets/img/logo.png'
import { Row, Col, Container } from 'react-bootstrap';
import '../../assets/css/menu.css'
import { data } from '../data/data'
import { redirectToProductDetail } from './redirectFun';
import { country, menuItems } from '../data/model';
import { setUserCountry, fetchUserCountry } from '../product/data/actions';
import * as Icon from 'react-bootstrap-icons';


export const Header = () => {
  const userCountry = useSelector(state => state.Products.params.userCountry);
  const countryIsFetching = useSelector(state => state.Products.params.countryIsFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    if (countryIsFetching) {
      dispatch(fetchUserCountry());
    }
  }, [countryIsFetching]);

  const onHandleCountry = (e) => {
    dispatch(setUserCountry(e.target.value));
  }
  const [filteredData, setFilteredData] = useState();
  const handleChange = (event) => {
    let value = event.target.value
    let products = data.product
    let dataf = []
    if (value) {
      products.forEach((item) => {
        let itemName = item.name.toLowerCase();
        let fvalue = value.toLowerCase();
        if (itemName.includes(fvalue)) {
          dataf.push(item)
        }
      })
      setFilteredData(dataf)
    } else {
      setFilteredData()
    }
  }

  return (
    <div className="align-items-center">
      <Row>
        <Col xs={7} className='menu' >
          <Link to="/">
            <img src={logo} style={{ height: '38px' }} />
          </Link>
        </Col>
        <Col md={4} xs={9} className="menu text-right dropdown">
          <input
            onChange={handleChange}
            className="form-control"
            placeholder="Search for product, brand , services"
            type="text"
            name="search"
            autoComplete="off"
          />
          <div className='dropdown-content '>
            {!filteredData && <>Please type any keyword  </>}
            {filteredData && filteredData.map((item, index) => (
              <Row key={index} className='filtered-data' onClick={() => redirectToProductDetail(item.id)}>
                <Col xs={2} className='filtered-data-img'>
                  <img src={item.img} />
                </Col>
                <Col xs={10} className='filtered-data-text'>{item.name}</Col>
              </Row>
            ))

            }
          </div>
        </Col>
        <Col md={1} xs={3} className="menu text-right">
          <div className='centered-element'>
            <Icon.Globe2 size={25} color={'grey'}/>&nbsp;{userCountry}
            <select
              name='country'
              value={''}
              id='country'
              className="select"
              style={{width:'25px'}}
              onChange={onHandleCountry}>

                  <option></option>
              {country.map((item, index) => {
                return (
                  <option key={index} value={item.code}>{item.name}</option>
                )
              })}

            </select>
          </div>
        </Col>
      </Row>
    </div>
  )
}


export const MenuLinks = (props) => {
  const history = createBrowserHistory()
  const currLink = history.location.hash
  return (
    <div className="menu-links" >
      <Container >
        {menuItems.map((item, index) =>
        (<Link
          key={index}
          className={currLink === item.hashLink ? 'active' : ''}
          to={item.menuLink}>{item.menuItem}
        </Link>)
        )}
      </Container>
    </div>
  )
}

