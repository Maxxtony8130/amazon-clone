import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  const history = useHistory();
  const home = () => {
    history.push("/");
  };
  const checkout = () => {
    history.push("/checkout");
  };
  return (
    <div className="header">
      <IconButton>
        <MenuIcon style={{ fontSize: 30, color: "white", marginLeft: "5px" }} />
      </IconButton>
      <img
        onClick={home}
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
      />
      <div className="header__search">
        <ArrowDropDownIcon className="header__arrowIcon" />
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__flag">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbdPa-2uF5tG0SHcReiHgU4djqj1NpctiP3w&usqp=CAU"
          alt="flag"
        />
      </div>
      <div className="header__nav">
        <Link style={{ textDecoration: "none" }} to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello,{!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : " Account & List"}
            </span>
          </div>
        </Link>
        <Link to="/orders" style={{ textDecoration: "none" }}>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__OptionBasket">
          <ShoppingCartIcon
            onClick={checkout}
            style={{ fontSize: "35", cursor: "pointer" }}
          />
          <span className="header__optionLineTwo  header__basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
