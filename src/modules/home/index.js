import React from 'react';
import HomeCarousel from './component/homeCarousel'
import FreshRecommendationList from './component/freshRecommendation'
import ProductSection from './component/productSection'
import OfferZoneList from './component/offerZone'
import { data } from '../product/data/data';

const Home = (props) => {
    return(
        <div>
           <HomeCarousel/>
           <br/>
           {/* <div className="primary-backgroun-color">
                <FreshRecommendationList/>
           </div>
           <br/> */}
           <ProductSection name="Today's Deal" product={data.product}/>
           <br/>
           {/* <div className="offer-zone">
                <OfferZoneList/>
           </div> */}
        </div>
    )
}

export default Home;