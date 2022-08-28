import React from 'react';
import { Col, Row, Card, Container } from 'react-bootstrap';
import product1 from '../../../assets/img/product1.jpg';

const FreshRecommendation = (props) => {
    return(
        <Col xs={3}>
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

const FreshRecommendationList = (props) => {
    return(
        <Container>
            <h3>Fresh Recommendation</h3>
            <br/>
            <Row>
                <FreshRecommendation/>
                
            </Row>
        </Container>
    )
}

export default FreshRecommendationList;