import React from 'react'
import './ImageProduct.css';
function ImageProduct({url, price}) {
    return (
        <div className="imageProduct">
            <div className="imageProduct__image">
              <img src={url} alt=""/>
            </div>
            <div className="imageProduct__price">
                <p>{price}</p>
            </div>
    
        </div>
    )
}
export default ImageProduct
