import React from "react";
import "./Tag.css";
function Tag({title, discription, url, link}) {
  return (
      <div className="tag">
        <div className="tag__text">
          <p>{title}</p>
        </div>
        <div className="tag__textContent">
          <p>{discription}
          </p>
          <img src={url} alt=""/>
        </div>
        <p>{link}</p>

      </div>

  );
}
export default Tag;
