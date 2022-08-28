import React, { useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import '../../../assets/css/product.css'
import {data} from '../data/data'
import { Redirect } from 'react-router-dom';

const ProductDetails = (props) => {
    const [detail, setDetail] = useState();
    const id = props.match.params.id  

    useEffect(() => {
        if(!detail){
            data.product.forEach((item)=>{
                if(id==item.id){
                    setDetail(item)
                    document.title=item.name;
                }
            })
        }
    },[detail]);
    
    console.log(props)
    const redirect=(url)=>{
        // window.location.href = url;
        window.open(url, '_blank' );
    }
    return(
        <>
        {detail?
        <Row style={{minHeight:'67vh'}}>
            <Col md={4} xs={12}>
                <div className='detailImg'>
                    <img src={detail.img}/>
                </div>
            </Col >
            <Col md={6} xs={12}>
                <h3>{detail.name}</h3>
                <p><b>Available in {detail.avail_country} only</b></p>
                <p style={{height:'250px', overflowY:'auto'}}>{detail.description}...<span className='link' onClick={()=>redirect(detail.tracking_url)}>learn more</span></p>
                <h4>
                    <span style={{paddingRight:'20px'}}>&nbsp;{detail.rate}</span>
                    <span style={{textDecoration: 'line-through', color:'grey', fontSize:'20px'}}>&nbsp;{detail.MRP}</span>
                </h4>
                <br/><br/>
                <Button onClick={()=>redirect(detail.tracking_url)}>Buy Now</Button>&nbsp;&nbsp;
                <Button variant="light" onClick={()=>redirect(detail.tracking_url)}>Get more details</Button>
            </Col>
        </Row>
        :<></>
    }
    </>
        )
    }

export default ProductDetails;