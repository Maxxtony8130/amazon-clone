import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IconButton } from "@material-ui/core";
import React from 'react'
import '../tv/TvList.css';
import { useStateValue } from "../StateProvider";
function TvList({ url, title, brand, rating, price }) {
  const [{},dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        url: url,
        title: title,
        brand: brand,
        price: price,
        rating: rating,
      },
    });
  };
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }
    return (
        <div className="TvList">
        <div className="TvList__image">
          <img
            src={url}
            alt=""
          />
        </div>
        <div className="TvList__name">
          <p>
            {truncate(title,60)}
          </p>
        </div>
        <div className="TvList__brand">
          <p>{brand}</p>
        </div>
        <div className="TvList__price">
          <p>₹{price} </p>
        </div>
        <div className="TvList__rating">
          <p>{rating}</p>
        </div>
        <div className="TvList__add">
          <IconButton 
          onClick={addToBasket}
          style={{ outline: "none",marginTop:"15px" }}>    
            <AddCircleIcon
              fontSize="large"
              style={{ outline: "none", color: "orange" }}
            />
          </IconButton>
        </div>
      </div>
    )
}
export default TvList
