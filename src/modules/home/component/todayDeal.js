import React from 'react';
import { Col, Row, Card, Container } from 'react-bootstrap';
import product1 from '../../../assets/img/product1.jpg';

const Deal = (props) => {
    const type = props.product.offerType
    const title= props.product.name
    const img = props.product.img
    const id = props.product.id
    return(
        <>
        { type=='today'? <Col lg={3} md={4} sm={12} xs={12}>
            <div className="card" onClick={()=>props.productDetails(id)}>
                <div className="card-img" style={{height:'300px'}}> 
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

const TodayDeal = (props) => {
    const productDetails = (value) => {
        window.open(`/product/${value}`);
    }
    return(
        <Container>
            <h3>Today Deal</h3>
            <br/>
            <Row>
                {props.product && props.product.map((item, index)=>(
                    <Deal key={index} product={item} productDetails={productDetails} />
                ))}
            </Row>
        </Container>
    )
}

export default TodayDeal;