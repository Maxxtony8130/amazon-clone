import React from "react";
import Ac from "./ac/Ac";
import "./ProductItem.css";
import Frig from "./Refrigerators/Frig";
import Tv from "./tv/Tv";
function ProductItem() {
  return (
    <div className="productItem">
      <div className="productItem__image">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/May/RiseIndia/UpdatedGW/V206289537_IN_HETV_RiseIndia_LATVFurniture_StorePage_PC_Header_1500x300.jpg"
          alt=""
        />
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/May/RiseIndia/UpdatedGW/RiseIndia_LATVFurniture_Header_1500x80-.jpg"
          alt=""
        />
      </div>
      <div className="productitem__category">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Rise/Revisedfinals/header/AC.jpg"
          alt=""
        />
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/May/RiseIndia/UpdatedGW/V206289537_IN_HETV_RiseIndia_LATVFurniture_TV_Work-form-home-essentials_440x460.jpg"
          alt=""
        />
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Rise/Revisedfinals/spot_light_440x460_2.jpg"
          alt=""
        />
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/Rise2020/Living-room-furniture_440x460_01.jpg"
          alt=""
        />
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Rise/Revisedfinals/spot_light_440x460_4.jpg"
          alt=""
        />
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Rise/Spotlight/spot_light_440x460_3.jpg"
          alt=""
        />
      </div>
      <div className="productItem__items">
          <Ac />
          <Tv />
          <Frig />
      </div>
    </div>
  );
}
export default ProductItem;
