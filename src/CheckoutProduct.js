import { Button } from "@material-ui/core";
import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ url, title, price, hidebutton, hidecheckbox }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      url: url,
    });
  };
  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__main">
        {!hidecheckbox && <input type="checkbox" />}
        <img src={url} alt="" />
        <div className="checkoutProduct__name">
          <p>{title}</p>
          {!hidebutton && (
            <Button
              onClick={removeFromBasket}
              style={{
                outline: "none",
                marginTop: "20px",
                border: "none",
                color: "black",
                backgroundColor: "#f0c14b",
                borderColor: " #a88734 #9c7e31 #846a29",
              }}
            >
              Remove from Cart
            </Button>
          )}
        </div>
      </div>
      <p>₹ {price}</p>
    </div>
  );
}

export default CheckoutProduct;
