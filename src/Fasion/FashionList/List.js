import React from 'react'
import './List.css';
import ListItem from './ListItem';
function List() {
    return (
        <div className="list">
            <div className="list__title">
            <p>Everyday must-haves | Up to 70% off</p>
            </div>
            <div className="list__image">
                <ListItem 
                url="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/EOSS_Flip_Jan_20/Wardrobe_Basics/6-Wardrobe-basics_01._SS400_QL85_.jpg"
                />
                <ListItem 
                url="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/EOSS_Flip_Jan_20/Wardrobe_Basics/6-Wardrobe-basics_02._SS400_QL85_.jpg"
                />
                <ListItem 
                url="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/EOSS_Flip_Jan_20/Wardrobe_Basics/6-Wardrobe-basics_03._SS400_QL85_.jpg"
                />
                <ListItem 
                url="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/EOSS_Flip_Jan_20/Wardrobe_Basics/V1/6-Wardrobe-basics_eng_04._SS400_QL85_.jpg"
                />
                <ListItem 
                url="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/EOSS_Flip_Jan_20/Wardrobe_Basics/6-Wardrobe-basics_eng_05._SS400_QL85_.jpg"
                />
                <ListItem 
                url="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/EOSS_Flip_Jan_20/Wardrobe_Basics/6-Wardrobe-basics_06._SS400_QL85_.jpg"
                />
                <ListItem 
                url="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/EOSS_Flip_Jan_20/Wardrobe_Basics/6-Wardrobe-basics_07._SS400_QL85_.jpg"
                />
                <ListItem
                url="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/EOSS_Flip_Jan_20/Wardrobe_Basics/6-Wardrobe-basics_08._SS400_QL85_.jpg"
                />
                <ListItem 
                url="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/EOSS_Flip_Jan_20/Wardrobe_Basics/6-Wardrobe-basics_09._SS400_QL85_.jpg"
                />
            </div>
        </div>
    )
}

export default List
