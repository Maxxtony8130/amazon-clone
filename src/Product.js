import { Avatar, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product() {
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useHistory();
  const profile = () => {
    history.push("/profile");
  };
  const product = () => {
    history.push("/productItem");
  };
  const fashion = () => {
    history.push("/fashion");
  };
  const mobile = () => {
    history.push("/mobile");
  };
  const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
  const classes = useStyles();
  return (
    <div className="product">
      <div onClick={profile} className="product__header">
        <Avatar
          className={classes.large}
          style={{ marginTop: "15px", cursor: "pointer" }}
        />
        <div className="product__textmain">
          <span className="product__text">Hello,{!user ? 'Guest' : user.email}</span>
          <p>Customer Since 2018</p>
        </div>
      </div>
      <div className="product__footer">
        <p>Top link for you</p>
      </div>
      <div className="product__image">
        <div className="product__image1">
          <img
            onClick={e => history.push('./orders')}
            src="https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/orders._AC_SR120,80_.png"
            alt=""
          />{" "}
          <img
            onClick={mobile}
            src="https://m.media-amazon.com/images/G/31/HUD/Dashboard/ProfileCard/976419031._AC_SR120,80_.png"
            alt=""
          />
        </div>
        <div className="product__image2">
          <img
            onClick={fashion}
            src="https://m.media-amazon.com/images/G/31/HUD/Dashboard/ProfileCard/6648217031._AC_SR120,80_.png"
            alt=""
          />{" "}
          <img
            onClick={product}
            src="https://m.media-amazon.com/images/G/31/HUD/Dashboard/ProfileCard/2454178031._AC_SR120,80_.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
