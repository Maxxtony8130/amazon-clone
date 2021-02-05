import React from "react";
import ImageProduct from "./ImageProduct";
import "./ProductList.css";
function ProductList({title, link}) {
  return (
    <div className="productList">
      <div className="productList__text">
        <h5>{title}</h5>
        <p className="productList__link"> {link}</p>
      </div>
      <div className="productList__image">
      <ImageProduct 
      url="https://m.media-amazon.com/images/I/51wwWM-rhLL.__AC_SY200_.jpg"
      price="Rs.79,990.00"
      />
      <ImageProduct 
      url="https://m.media-amazon.com/images/I/41ImsZy3u5L.__AC_SY200_.jpg"
      price="Rs.1,499.00"
      />
      <ImageProduct
      url="https://m.media-amazon.com/images/I/51JU8ZlLATL.__AC_SY200_.jpg"
      price="Rs.9,798.00"
      />
      <ImageProduct
      url="https://m.media-amazon.com/images/I/41-XyjmbWTL.__AC_SY200_.jpg"
      price="Rs.2,281.00"
      />
      <ImageProduct
      url="https://m.media-amazon.com/images/I/41HW9Zl0v1L._AC_SY200_.jpg"
      price="₹ 10,400.00"
      />
      <ImageProduct
      url="https://m.media-amazon.com/images/I/41n8jTxKLML.__AC_SY200_.jpg"
      price="Rs.3,455.00"
      />
      <ImageProduct
      url="https://m.media-amazon.com/images/I/41HdPP8jqNL.__AC_SY200_.jpg"
      price="₹ 6,877.00 "
      />
      <ImageProduct
      url="https://m.media-amazon.com/images/I/41AYsoOVQwL.__AC_SY200_.jpg"
      price="₹21,490"
      />
      <ImageProduct
      url="https://m.media-amazon.com/images/I/51bOxtLKqpL.__AC_SY200_.jpg"
      price="₹81,490"
      />
      <ImageProduct
      url="https://m.media-amazon.com/images/I/31VZa1B6OXL.__AC_SY200_.jpg"
      price="₹21"
      />
      <ImageProduct 
      url="https://m.media-amazon.com/images/I/31COjvjl+cL.__AC_SY200_.jpg"
      price="₹149"
      />
      <ImageProduct
      url="https://m.media-amazon.com/images/I/41OlCyVl1iL.__AC_SY200_.jpg"
      price="₹11,490"
      />
      <ImageProduct
      url="https://m.media-amazon.com/images/I/51ivRBHcH6L.__AC_SY200_.jpg"
      price="₹2490"
      />
      </div>
    </div>
  );
}
export default ProductList;
