import React from 'react'
import './List.css';
import ListItem from './ListItem';
function List2() {
    return (
        <div className="list">
        <div className="list__title">
        <p>Women's collections</p>
        </div>
        <div className="list__image">
            <ListItem 
            url="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/EOSS_Flip_Jan_20/SBC/Women/SBC_01._SY530_QL85_.jpg"
            />
            <ListItem 
            url="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/EOSS_Flip_Jan_20/SBC/Women/SBC_02._SY530_QL85_.jpg"
            />
            <ListItem 
            url="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/EOSS_Flip_Jan_20/SBC/Women/SBC_03._SY530_QL85_.jpg"
            />
            <ListItem 
            url="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/EOSS_Flip_Jan_20/SBC/Women/SBC_04._SY530_QL85_.jpg"
            />
            <ListItem 
            url="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/EOSS_Flip_Jan_20/SBC/Women/SBC_05._SY530_QL85_.jpg"
            />
            <ListItem 
            url="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/EOSS_Flip_Jan_20/SBC/Women/SBC_06._SY530_QL85_.jpg"
            />
        </div>
    </div>
    )
}

export default List2;
