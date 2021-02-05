import React from "react";
import "./Fashion.css";
import List from "./FashionList/List";
import List1 from "./FashionList2/List1";
import List2 from "./FashionList3/List2";
function Fashion() {
  return (
    <div className="fashion">
      <div className="fashion__part">
        <div className="fashion__title">
          <p>In the spotlight</p>
        </div>
        <div className="fashion__image">
          <div className="fashion__image1">
            <img
              src="https://m.media-amazon.com/images/G/31/img21/Fashion/Jan_Art_Teaser/Ingress/image._SS400_QL85_.png"
              alt=""
            />
            <p>Know more</p>
          </div>
          <div className="fashion__image2">
            <img
              src="https://m.media-amazon.com/images/G/31/img20/Fashion/stylesnap/stylesnap._SS400_QL85_.jpg"
              alt=""
            />
            <p>Try Now</p>
          </div>
          <div className="fashion__image3">
            <img
              src="https://m.media-amazon.com/images/G/31/Watches/BAU-Jan/Men__Women_1._SS400_QL85_.jpg"
              alt=""
            />
            <p>Watches | Designed in Denmark</p>
          </div>
          <div className="fashion__image4">
            <img
              src="https://m.media-amazon.com/images/G/31/img19/Luggage/Dec/WRS/MTS_Scroll._SS400_QL85_.jpg"
              alt=""
            />
            <p>Shop now</p>
          </div>
          <div className="fashion__image5">
            <img
              src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/StyleAtHome/jan2020/Ingress._SS400_QL85_.jpg"
              alt=""
            />
            <p>Know more</p>
          </div>
        </div>
      </div>
      <div className="fashion__part">
        <List />
      </div>
      <div className="fashion__part">
        <List1 />
      </div>
      <div className="fashion__part">
        <List2 />
      </div>
    </div>
  );
}

export default Fashion;
