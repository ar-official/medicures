import React from 'react';
import HomeCarousel from './component/homeCarousel'
import FreshRecommendationList from './component/freshRecommendation'
import ProductSection from './component/productSection'
import OfferZoneList from './component/offerZone'
import { data } from '../data/data';

const Home = (props) => {
    return(
        <div>
           <HomeCarousel/>
           <br/>
           <ProductSection name="Today's Deal" product={data.product}/>
           <br/>
        </div>
    )
}

export default Home;