import { Avatar, Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Profile.css";
import { useStateValue } from "../StateProvider";
function Profile() {
  const [{ basket, user }, dispatch] = useStateValue();

  const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
    large1: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
  const classes = useStyles();
  return (
    <div className="profile">
      <div className="profile__background">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-thumb.jpg"
          alt=""
        />
      </div>
      <div className="profile__info">
        <div style={{ display: "flex" }}>
          <Avatar
            className={classes.large}
            style={{ marginTop: "-95px", marginLeft: "20px" }}
          />
          <div className="profile__name">
            <h3>
              Hello, <strong>{!user ? "Guest" : user.email}</strong>
            </h3>
          </div>
        </div>
        <div className="profile__button">
          <Button className="profile__button" style={{ outline: "none" }}>
            Edit Your public profile
          </Button>
        </div>
      </div>
      <div className="profile__row">
        <div className="profile___follow">
          <div className="profile__text">
            <h5>Who you follow</h5>
            <p>Public</p>
          </div>
          <div className="profile__follow__image">
            <Avatar
              src="https://www.amazon.in/avatar/default/amzn1.account.AFL2WN55XOEQ27BI72APBNTARZRA?square=true&max_width=460"
              className={classes.large1}
            />
            <Avatar
              src="https://www.amazon.in/avatar/default/amzn1.account.AFQR7S3X2ZURJUKW2FCHO2EANK4Q?square=true&max_width=460"
              className={classes.large1}
              style={{ marginLeft: "10px" }}
            />
          </div>
          <div className="profile__link">
            <p>Discover more to follow</p>
          </div>
        </div>
        <div style={{ backgroundColor: "white" }} className="profile___follow">
          <p style={{ fontWeight: "700" }}>Insight</p>
          <div className="profile__follow__text">
            <div className="profile__text1">
              <h3>0</h3>
              <p style={{ marginRight: "20px", fontWeight: "500" }}>
                helpful votes
              </p>
              <p style={{ fontStyle: "italic" }}>Public</p>
            </div>
            <div className="profile__text2">
              <h3>1</h3>
              <p style={{ marginRight: "20px", fontWeight: "500" }}>reviews</p>
              <p style={{ fontStyle: "italic" }}>Public</p>
            </div>{" "}
            <div className="profile__text3">
              <h3>0</h3>
              <p style={{ fontWeight: "500" }}>followers</p>
              <p style={{ fontStyle: "italic" }}>Private</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
