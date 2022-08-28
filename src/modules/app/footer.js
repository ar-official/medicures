import React, { useEffect, useState } from 'react';
import { Link} from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { Row, Col, Container,Badge } from 'react-bootstrap';
import '../../assets/css/footer.css'
import {MenuLinks} from "./menu"

import { runInContext } from 'lodash';

export const Footer = (props) => {
  return (
    <div className="footer-menu">
      <Container>
        <Row>
          <Col xs={10}>
            Buy any product from our site and get 50% off
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export const FooterBottom = (props) => {
  return (
    <div className="footer-bottom text-center">
      <MenuLinks/>
      <span>&#169; ABZ Monster | All Right Reserved</span>
    </div>
  )
}
