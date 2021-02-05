import React from "react";
import { useHistory } from "react-router-dom";
import "./ProductImg.css";
function Fashion({ title, img1, img2, img3, img4, link }) {
  const history = useHistory();
  const fashion = () => {
    history.push("/fashion");
  };
  return (
    <div className="prouctImg">
      <div className="productImg__text">
        <p onClick={fashion}>{title}</p>
      </div>
      <div className="productImg__img">
        <div onClick={fashion} className="prouctImg__img1">
          <img src={img1} alt="" /> <img src={img2} alt="" />
        </div>
        <div onClick={fashion} className="productImg__img2">
          <img src={img3} alt="" /> <img src={img4} alt="" />
        </div>
      </div>
      <p onClick={fashion}>{link}</p>
    </div>
  );
}
export default Fashion;
