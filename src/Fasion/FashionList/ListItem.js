import React from 'react'
import './Listitem.css';
function ListItem({url}) {
    return (
        <div className="listItem">
            <div className="listItem__image">
              <img src={url} alt=""/>
            </div>
            <div className="listItem__text">
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default ListItem;
