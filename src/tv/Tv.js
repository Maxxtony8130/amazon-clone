import React from 'react'
import './Tv.css';
import TvList from './TvList';
function Tv() {
    return (
        <div className="ac">
      <div className="ac__topic">
        <h4>Smart TVs</h4>
        <p style={{ color: "blue" }}>See more</p>
      </div>
      <div className="ac__list">
        <TvList url="https://images-eu.ssl-images-amazon.com/images/I/416J+BmHoHL._AC_SX184_.jpg"
         title="Sanyo 80 cm (32 inches) Kaizen Series HD Ready Smart Certified Android IPS LED TV XT-32A170H (Black) (2019 Model)"
         brand="Sanyo"
         rating="⭐⭐⭐⭐⭐" 
         price={28990.00} /> 
        <TvList 
        url="https://images-eu.ssl-images-amazon.com/images/I/51k7hnlTdVL._AC_SX184_.jpg" 
        title="Kodek 1 Ton 3 Star Inverter Split AC (Copper, Anti Bacterial Filter, 2020 Model, GIC 12YTC3-WTA, White)"
        brand="Kodek" 
        rating="⭐⭐⭐⭐⭐" 
        price={28490.00} />
        <TvList url="https://images-eu.ssl-images-amazon.com/images/I/416IHu53mdL._AC_SX184_.jpg" 
        title="AmazonBasics 1.5 Ton 3 Star 2019 Split AC with Four Stage air filtration (Copper White)"
        brand="amazon" 
        rating="⭐⭐⭐⭐⭐" 
        price={25999.00} />
        <TvList url="https://images-eu.ssl-images-amazon.com/images/I/51Qd926ObhL._AC_SX184_.jpg" 
        title="Sanyo 1.5 Ton 3 Star Dual Inverter Split AC (Copper, PM 2.5 Filter, 2020 Model, SI/SO-15T3SCIC White)"
        brand="Sanyo" 
        rating="⭐⭐⭐⭐⭐" 
        price={25999.00} />
        <TvList url="https://images-eu.ssl-images-amazon.com/images/I/41BpwNBl0cL._AC_SX184_.jpg" 
        title="Godrej 1.5 Ton 2 Star Hot & Cold Split AC (Copper, Anti Bacterial Filter, 2019 Model, GSH 18LTC2-WSA Split White)"
        brand="Sanyo" 
        rating="⭐⭐⭐⭐⭐" 
        price={38990.00} />
        <TvList url="https://images-eu.ssl-images-amazon.com/images/I/51fjkV5q8FL._AC_SX184_.jpg" 
        title="Sanyo 1.5 Ton 3 Star Dual Inverter Split AC (Copper, PM 2.5 Filter, 2020 Model, SI/SO-15T3SCIC White)"
        brand="Lg" 
        rating="⭐⭐⭐⭐⭐" 
        price={38990.00} />
        <TvList url="https://images-eu.ssl-images-amazon.com/images/I/51cCO8JpKsL._AC_SX184_.jpg" 
        title="Sanyo 1.5 Ton 3 Star Dual Inverter Split AC (Copper, PM 2.5 Filter, 2020 Model, SI/SO-15T3SCIC White) "
        brand="Lg" 
        rating="⭐⭐⭐⭐⭐" 
        price={38990.00} />
        <TvList url="https://images-eu.ssl-images-amazon.com/images/I/51wms8P5+3L._AC_SX184_.jpg" 
        title="Sanyo 1.5 Ton 3 Star Dual Inverter Split AC (Copper, PM 2.5 Filter, 2020 Model, SI/SO-15T3SCIC White)"
        brand="Info" 
        rating="⭐⭐⭐⭐⭐" 
        price={38990.00}/>
        <TvList url="https://images-eu.ssl-images-amazon.com/images/I/51eyH19iNFL._AC_SX184_.jpg" 
        title="Sanyo 1.5 Ton 3 Star Dual Inverter Split AC (Copper, PM 2.5 Filter, 2020 Model, SI/SO-15T3SCIC White)"
        brand="Godrej" 
        rating="⭐⭐⭐⭐⭐" 
        price={38990.00} />
         <TvList 
        url="https://images-eu.ssl-images-amazon.com/images/I/51p5m4bQN6L._AC_SX184_.jpg" 
        title="Godrej 1 Ton 3 Star Inverter Split AC (Copper, Anti Bacterial Filter, 2020 Model, GIC 12YTC3-WTA, White)"
        brand="Godrej" 
        rating="⭐⭐⭐⭐⭐" 
        price={28490.00} />
        <TvList url="https://images-eu.ssl-images-amazon.com/images/I/513vtrIi3fL._AC_SX184_.jpg" 
        title="AmazonBasics 1.5 Ton 3 Star 2019 Split AC with Four Stage air filtration (Copper White)"
        brand="amazon" 
        rating="⭐⭐⭐⭐⭐" 
        price={25999.00} />
        <TvList url="https://images-eu.ssl-images-amazon.com/images/I/51p5m4bQN6L._AC_SX184_.jpg" 
        title="Sanyo 1.5 Ton 3 Star Dual Inverter Split AC (Copper, PM 2.5 Filter, 2020 Model, SI/SO-15T3SCIC White)"
        brand="Sanyo" 
        rating="⭐⭐⭐⭐⭐" 
        price={25999.00} />
         <TvList 
        url="https://images-eu.ssl-images-amazon.com/images/I/51fMRk6FwHL._AC_SX184_.jpg" 
        title="Lg 1 Ton 3 Star Inverter Split AC (Copper, Anti Bacterial Filter, 2020 Model, GIC 12YTC3-WTA, White)"
        brand="Lg" 
        rating="⭐⭐⭐⭐⭐" 
        price= {28490.00} />
        <TvList url="https://images-eu.ssl-images-amazon.com/images/I/513vtrIi3fL._AC_SX184_.jpg" 
        title="AmazonBasics 1.5 Ton 3 Star 2019 Split AC with Four Stage air filtration (Copper White)"
        brand="amazon" 
        rating="⭐⭐⭐⭐⭐" 
        price="25,999.00" />
        <TvList url="https://images-eu.ssl-images-amazon.com/images/I/51eyH19iNFL._AC_SX184_.jpg" 
        title="Sanyo 1.5 Ton 3 Star Dual Inverter Split AC (Copper, PM 2.5 Filter, 2020 Model, SI/SO-15T3SCIC White)"
        brand="Sanyo" 
        rating="⭐⭐⭐⭐⭐" 
        price={25999.00} />
      </div>
    </div>
    )
}
export default Tv
