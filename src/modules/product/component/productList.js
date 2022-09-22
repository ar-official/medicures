import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import {fetchProductList, fetchUserCountry } from '../data/actions'
import { Col, Row } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import '../../../assets/css/product.css'
import { redirectToProductDetail } from '../../app/redirectFun';



const ProductList = (props) => {
    const countryIsFetching = useSelector(state => state.Products.params.countryIsFetching);
    const countryFetched = useSelector(state => state.Products.params.countryFetched);
    const userCountry = useSelector(state => state.Products.params.userCountry);
    const productIsFetching = useSelector(state => state.Products.params.productIsFetching);
    const productList = useSelector(state => state.Products.products);
    const dispatch = useDispatch();

    useEffect(() => {
        if(countryIsFetching){
            dispatch(fetchUserCountry());
        }if(productIsFetching && countryFetched){
            dispatch(fetchProductList());
        }
    },[countryIsFetching, productIsFetching, countryFetched]);
    return (
        <Row>
            {productList && Object.keys(productList).map((key, index) =>
                userCountry && userCountry === productList[key].avail_country_code ?
                    <Product
                        product={productList[key]}
                        key={index}
                        index={index + 1}
                        productDetails={redirectToProductDetail}
                    />
                    : <></>
            )}
        </Row>
    )
}

const Product = (props) => {
    const id = props.product.id;
    const img = props.product.img;
    const name = props.product.name;
    const description = props.product.description;
    const rate = props.product.rate;
    const mrp = props.product.MRP;
    return (
        <Col className="product-container" md={4} lg={3} xs={6} sm={6} >
            <div className="product-card" onClick={() => props.productDetails(id)}>
                <Row style={{ padding: '15px' }}>
                    <Col className="text-left">
                    </Col>
                    <Col title="shortlist" className="text-right text-link"><Icon.Heart /></Col>
                </Row>
                <div className="product-img">
                    <img src={img} alt={name} title={name} />
                </div>
                <div style={{ padding: '0 15px 15px ' }}>
                    <div className="product-container">
                        <div title={name} className="product-heading text-ellipsis"><b>{name}</b></div>
                        <div title={description} className="product-description text-ellipsis">{description},</div>
                    </div>
                    <Row>
                        <Col className="text-left">
                            <b>&nbsp;{rate}</b>&nbsp;&nbsp;&nbsp;
                            <span style={{ textDecoration: 'line-through', color: 'grey' }}>&nbsp;{mrp}</span>
                        </Col>
                    </Row>
                </div>
            </div>
        </Col>
    )
}



export default ProductList;