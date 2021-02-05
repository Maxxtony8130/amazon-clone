import React from 'react'
import { useHistory } from 'react-router-dom';
import './Mobile.css';
import SliderM from './SliderM';
function Mobile() {
    const history = useHistory();
    const List =() => {
        history.push("./mobileList")
    }
    return (
        <div className="mobile">
            <div 
            onClick={List}
            className="mobile__header">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/PC_Header_1500x550.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/Teaser1/BankStripe/bank_stripe_pc_English.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/Teaser2/Rec/Prime_PC_1500X150_without_prime_logo.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Headers/PC/1500X150_3.jpg" alt=""/>
            </div>
            <div 
             onClick={List}
            className="mobile__slider">
            <SliderM />
            </div>
            <div 
             onClick={List}
            className="mobile__header">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/Revised/1500x150_1.jpg" alt=""/>
            </div>
            <div 
            onClick={List}
            className="mobile__image">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_01.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_26.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_16.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_29.jpg" alt=""/>
            </div>
            <div 
             onClick={List}
            className="mobile__header">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/D20275946_INJanART21_WL_CategoryPage_Horizontal_Tiles_PC_2.jpg" alt=""/>
            </div>
            <div 
             onClick={List}
            className="mobile__image">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_30.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_15.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_1.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/V1/WL_JAN_ART_55.jpg" alt=""/>
            </div>
            <div 
             onClick={List}
            className="mobile__header">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Headers/PC/1500X150_2.jpg" alt=""/>
            </div>
            <div 
             onClick={List}
            className="mobile__image">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_28.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_4.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_13.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_19.jpg" alt=""/>
            </div>
            <div className="mobile__header">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Headers/PC/1500X150_4.jpg" alt=""/>
            </div>
            <div
             onClick={List}
            className="mobile__image">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/V1/WL_JAN_ART_61.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_27.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_20.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/V3/D20275946_INJanART21_WL_CategoryPage_Tiles_4.jpg" alt=""/>
            </div>
            <div
             onClick={List}
            className="mobile__image">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/D20275946_INJanART21_WL_CategoryPage_Tiles_13.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_60.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/D20275946_INJanART21_WL_CategoryPage_Tiles_24.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_10.jpg" alt=""/>
            </div>
            <div 
             onClick={List}
            className="mobile__image">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_14.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_18.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_21.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_34.jpg" alt=""/>
            </div>
            <div 
             onClick={List}
            className="mobile__image">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_43.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_44.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/WL_JAN_ART_48.jpg" alt=""/>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/CatPage/Tiles/D20275946_INJanART21_WL_CategoryPage_Tiles_26.jpg" alt=""/>
            </div>
            <div className="mobile__image">

            </div>
        </div>
    )
}

export default Mobile
