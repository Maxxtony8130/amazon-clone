import React from 'react'
import './ListItem.css';
function ListItem({url}) {
    return (
        <div className="listItem">
        <div className="listItem__image">
          <img src={url} alt=""/>
        </div>
        <div className="listItem__text">
            <p>Up to 70% off</p>
        </div>
    </div>
    )
}

export default ListItem;
