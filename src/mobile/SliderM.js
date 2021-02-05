import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SliderM.css";
function Slider() {
  return (
    <div className="slider">
      <Carousel interval={1300} indicators={false} controls={false} >
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M02s/PriceUnveil/D19805912_IN_WLME_SamsungGalaxy_M02s_New_Launch_DesktopTallHero_1500x600_3._CB411536580_.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Samsung/JanArt/M02s/deals/D20181490_JanART21_WL_Samsung_GalaxyM02s_DesktopHero_Flap_1500x600_2._CB661896698_.jpg"
            alt="Second slide"
          />

        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_9Power/GW/21stDec/Set1/Tallhero_1500x600_1._CB414120291_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Samsung/JanArt/M51/Flap/D20182257_JanART21_WL_Samsung_GalaxyM51_DesktopHero_Flap_1500x600_2._CB661908251_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
