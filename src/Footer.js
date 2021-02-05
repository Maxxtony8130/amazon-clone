import React from "react";
import Button from "@material-ui/core/Button";
import "./Footer.css";
import LanguageIcon from "@material-ui/icons/Language";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__head">
        <p>Back To Top</p>
      </div>
      <div className="footer__middle">
        <div className="footer__middle1">
          <p>
            {" "}
            <strong>Get to Know Us</strong>
          </p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
          <p>Gift a Smile</p>
        </div>
        <div className="footer__middle2">
          <p>
            <strong> Connect with Us </strong>
          </p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer__middle3">
          <p>
            {" "}
            <strong>Make Money with Us</strong>
          </p>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>
        <div className="footer__middle3">
          <p>
            {" "}
            <strong>Let Us Help You</strong>
          </p>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
        </div>
      </div>
      <div className="footer__last">
        <div className="footer__last1">
          <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
          <Button
            style={{ marginLeft: "18px", marginBottom: "13px", marginTop: "40px",color: "white",outline:"none" }}
            variant="outlined"
            startIcon={<LanguageIcon style={{ color: "white" }} />}
          >
            English
          </Button>
        </div>
          <div className="footer__country">
            <p>Australia</p>
            <p>Brazil</p>
            <p>Canada</p>
            <p>China</p>
            <p>France</p>
            <p>Germany</p>
            <p>Italy</p>
            <p>Japan</p>
            <p>Mexico</p>
            <p>Netherland</p>
            <p>Singapore</p>
            <p>Spain</p>
            <p> United Arab Emirates</p>
            <p>United Kingdom</p>
            <p> United States</p>
          </div>
      </div>
    </div>
  );
}
export default Footer;
