import React from 'react';
import { Carousel} from 'react-bootstrap';
import product2 from '../../../assets/img/product2.jpg';
import product3 from '../../../assets/img/product3.jpg';
import product4 from '../../../assets/img/product4.jpg';

const HomeCarousel = (props) => {
    return(
        // <Container>
            
           <Carousel style={{overflow:'hidden', height:'430px', borderRadius:'5px'}}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={product4}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="text-shadow">First slide label</h3>
                    <p className="text-shadow">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={product2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 className="text-shadow">Second slide label</h3>
                    <p className="text-shadow">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={product3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className="text-shadow">Third slide label</h3>
                    <p className="text-shadow">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        // </Container>
        )
}

export default HomeCarousel;