import React, { forwardRef } from "react";
import CurrencyFormat from "react-currency-format";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import SubTotal from "./SubTotal";
import FlipMove from "react-flip-move";

const FunctionalArticle = forwardRef((item, ref) => (
  <div ref={ref}>
    <CheckoutProduct title={item.title} url={item.url} price={item.price} />
  </div>
));
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <h5>Hello, {!user ? "Guest" : user.email}</h5>
        <div className="checkout__left__header">
          <h5>Shopping Cart</h5>
          <p>Price</p>
        </div>
        <div className="checkout__left__footer">
          <FlipMove>
            {basket.map((item, url) => (
              <FunctionalArticle key={url} {...item} />
            ))}
          </FlipMove>
        </div>
        <div className="checkout__subtotal">
          <h1></h1>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <h5>
                  Subtotal ({basket.length} items): <strong>{value}</strong>
                </h5>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            lakhSeparator={true}
            prefix={"₹"}
          />
        </div>
      </div>
      <div className="checkout__right">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
          alt=""
        />
        <div className="checkout__right__box">
          <SubTotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
