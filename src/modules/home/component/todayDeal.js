import React from 'react';
import { Col, Row, Card, Container } from 'react-bootstrap';
import product1 from '../../../assets/img/product1.jpg';

const Deal = (props) => {
    return(
        <Col xs={4}>
            <div className="card">
                <div className="card-img"> 
                    <img src={product1}/>
                </div> 
            </div>
            <div className="text-center card-text"> 
                Card Text
            </div>
        </Col>
    )
}

const TodayDeal = (props) => {
    return(
        <Container>
            <h3>Today Deal</h3>
            <br/>
            <Row>
                <Deal/>
            </Row>
        </Container>
    )
}

export default TodayDeal;