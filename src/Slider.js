import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slider.css";
function Slider() {
  return (
    <div className="slider">
      <Carousel interval={1500} indicators={false} controls={false} >
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
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Herotator/HeroPC_1500x600_HFC_3._CB413130503_.jpg"
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
            src="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/Media-Vgsw/Desktop_Tallhero_1500-X-600-BB-jan-rvised._CB411825669_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/GW2021/Jan-ART_DesktopHero_1500X600._CB411655412_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/HeroJan21/Jan_SMP_Sheldon_1X._CB411089291_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC/April20/Gateway/DesktopHero_HFC_1500x600_Recharge1._CB414105779_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/primedeals/PSW_PC_1x_English_Illustration._CB422946471_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
