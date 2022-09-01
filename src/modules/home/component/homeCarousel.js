import React from 'react';
import { Carousel} from 'react-bootstrap';
import product2 from '../../../assets/img/product2.jpg';
import product3 from '../../../assets/img/product3.jpg';
import product4 from '../../../assets/img/product4.jpg';

const HomeCarousel = (props) => {
    const item = [
        {
            id:1,
            name:'',
            title:'first',
            description:'First slide label',
            img:product2
        },
        {
            id:2,
            name:'',
            title:'Second',
            description:'Second slide label',
            img:product3
        },
        {
            id:3,
            name:'',
            title:'Third',
            description:'Third slide label',
            img:product4
        }
    ]
    return(
        // <Container>
            
           <Carousel style={{overflow:'hidden', height:'430px', borderRadius:'5px'}}>
                {item.map((item, index)=>(
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={item.img}
                        alt="First slide"
                        />
                        {/* <Carousel.Caption>
                        <h3 className="text-shadow">{item.title}</h3>
                        <p className="text-shadow">{item.description}</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                ))}
            </Carousel>
        // </Container>
        )
}

export default HomeCarousel;