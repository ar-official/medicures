import React from 'react';
import HomeCarousel from './component/homeCarousel'
import FreshRecommendationList from './component/freshRecommendation'
import TodayDeal from './component/todayDeal'
import OfferZoneList from './component/offerZone'

const Home = (props) => {
    return(
        <div>
           <HomeCarousel/>
           <br/>
           {/* <div className="primary-backgroun-color">
                <FreshRecommendationList/>
           </div>
           <br/> */}
           <TodayDeal/>
           <br/>
           {/* <div className="offer-zone">
                <OfferZoneList/>
           </div> */}
        </div>
    )
}

export default Home;