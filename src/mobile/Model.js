import { Button } from "@material-ui/core";
import React from "react";
import { useStateValue } from "../StateProvider";
import "./Model.css";
function Model({ url, price, title }) {
  const [{  }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        url: url,
        title: title,
        price: price,
      },
    });
  };
  return (
    <div className="model">
      <div className="modal__left">
        <div className="model__img">
          <img src={url} alt="" />
        </div>
      </div>
      <div className="modal__right">
        <div className="model__name">
          <p>{title}</p>
        </div>
        <div className="model__rating">
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <div className="model__price">
          <p>₹{price}</p>
        </div>
        <Button
          onClick={addToBasket}
          className="model__add"
          style={{
            outline: "none",
            backgroundColor: "#f0c14b",
            marginTop: "50px",
            border: "1px solid",
            borderColor: "#a88734 #9c7e31 #846a29",
          }}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default Model;
