import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { redirectToProductDetail } from '../../app/redirectFun';

const Deal = (props) => {
    const type = props.product.offerType
    const title= props.product.name
    const img = props.product.img
    const id = props.product.id
    const countryCode = props.product.avail_country_code
    return(
        <>
        { type=='today'? <Col lg={3} md={4} sm={6} xs={6}>
            <div className="card" onClick={()=>props.productDetails(id)}>
                <div className='localization-icon'>
                    <Icon.Globe2/>&nbsp;<span>{countryCode}</span>
                </div>
                <div className="card-img"> 
                    <img src={img}/>
                </div> 
            </div>
            <div className="text-center card-text"> 
                {title}
            </div>
        </Col>:<></>}
        </>
    )
}

const ProductSection = (props) => {
    return(
        <Container>
            <h3>{props.name}</h3>
            <br/>
            <Row>
                {props.product && props.product.map((item, index)=>(
                    <Deal key={index} product={item} productDetails={redirectToProductDetail} />
                ))}
            </Row>
        </Container>
    )
}

export default ProductSection;