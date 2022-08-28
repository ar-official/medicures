import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import '../../../assets/css/product.css'
import { data } from '../data/data'


const Product = (props) => {
    const id = props.product.id;
    const img = props.product.img;
    const name = props.product.name;
    const description = props.product.description;
    const rate = props.product.rate;
    const mrp = props.product.MRP;
    return (
        <Col className="product-container" md={4} lg={3} xs={12} >
            <div className="product-card" onClick={()=>props.productDetails(id)}>
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
                            <span style={{textDecoration: 'line-through', color:'grey'}}>&nbsp;{mrp}</span>
                        </Col>
                    </Row>
                </div>
            </div>
        </Col>
    )
}


const ProductList = (props) => {
    const product = data.product;
    const productDetails = (value) => {
        props.history.push(`/product/${value}`);
    }
    return (
        <Row>
            {Object.keys(product).map((key, index) =>
                <Product
                    product={product[key]}
                    key={index}
                    index={index + 1}
                    productDetails={productDetails}
                />)}
        </Row>
    )
}

export default ProductList;