import React from 'react';
import { Col, Row, Card, Container } from 'react-bootstrap';
import product1 from '../../../assets/img/product1.jpg';

const OfferZone = (props) => {
    return(
        <Row className="align-items-center">
            <Col>
                <div className="card">
                    <div className="card-img"> 
                        <img src={product1}/>
                    </div> 
                </div>
            </Col>
            <Col >
                <h4>Lorem Ipsum is simply dummy</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>

            </Col>
        </Row>
    )
}

const OfferZoneList = (props) => {
    return(
        <Container>
            <h3>Offer Zone</h3>
            <br/>
            <OfferZone/>
        </Container>
    )
}

export default OfferZoneList;