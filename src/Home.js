import React from "react";
import Fashion from "./Fashion";
import "./Home.css";
import Product from "./Product";
import ProductImg from "./ProductImg";
import ProductList from "./ProductList";
import ProductList2 from "./ProductList2";
import Slider from "./Slider";
import Tag from "./Tag";
function Home() {
  
  return (
    <div className="home">
      <Slider />
      <div className="home__row">
        <Product />
        <ProductImg
          title="Top picks for your home"
          img1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_372x232_2._SY116_CB414480869_.jpg"
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_4._SY116_CB414480869_.jpg"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_3._SY116_CB414480869_.jpg"
          link="see more"
        />
        <Fashion
          title="Style for Mens | Up to 70% off"
          img1="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/1._SY116_CB413570652_.jpg"
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/2._SY116_CB413570652_.jpg"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/5._SY116_CB413570652_.jpg"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/3._SY116_CB413570652_.jpg"
          link="see more"
        />
        <Tag
          title="Birthday Store"
          discription="Chocolates, gifts, cards, decorations and more for all your gifting
        and celebration needs"
          url="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/BirthdayStore/PC/headers-PC.gif"
          link="Shop now"
        />
      </div>
      <div className="home__row">
        <ProductImg
          title="Revamp your home in style"
          img1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_1_bd034eee_6f06_4e0a_9967_d0e0e5f7f932_jpg_LOWER_QL10_._SY116_CB423376243_.jpg"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_2_64e793dc_221d_4067_8fca_2f0338879977_jpg_LOWER_QL85_._SY116_CB423376243_.jpg"
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_3_ccc0f761_ea08_4cfb_9562_6f13e80170d8_jpg_LOWER_QL30_._SY116_CB423376243_.jpg"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/GWPC/XCM_Manual_372x232_1212890_372X232_4_bc4e9dc4_a3aa_4aae_93fd_9723dacd805f_jpg_LOWER_QL50_._SY116_CB423376243_.jpg"
          link="Explore all"
        />
        <ProductImg
          title=" Shop by Category"
          img1="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg"
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg"
          link="see more"
        />
        <Tag
          title="Recommended for you"
          url="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/78ebb862e4d73ebba4e523a02c60da359dbbb317a6b3b216106a03066b3c8bb8._SL260_.jpg"
          discription="Chhalaang"
          link="See more on Primevideo.com"
        />
        <ProductImg
          title="Amazon Brands & more"
          img1="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/Mixer_B07RYL7NSH_Asins_186x116._SY116_CB409842842_.jpg"
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg"
          link="see more"
        />
      </div>
      <div className="home__row">
        <ProductList title="Today's Deals" link="See all deals" />
      </div>
      <div className="home__row">
        <ProductList2
          title="Great Republic Day Sale"
          link="Explore deals & offers"
        />
      </div>
      <div className="home__row">
        <Tag
          title="Make your bed winter ready | Made for Amazon Brands"
          url="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/CC/Comforters_Desktop_379x304._SY304_CB413974303_.jpg"
          link="visit the winter store"
        />
        <ProductImg
          title="For your little ones | Amazon Brands & more"
          img1="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/Comforters_186x116._SY116_CB428959227_.jpg"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/OP_186x116._SY116_CB428959226_.jpg"
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/Toys_186x116._SY116_CB428959226_.jpg"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/QC/kids_116._SY116_CB429651075_.jpg"
          link="see more"
        />
        <ProductImg
          title="All your grocery essentials | Amazon fresh"
          img1="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Jan21/GWQC/8thjan/fnv_RC_set1_1x._SY116_CB411372990_.jpg"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Jan21/GWQC/8thjan/dairy_RC_set1_1x._SY116_CB411372990_.jpg"
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Jan21/GWQC/8thjan/rice_RC_set1_1x._SY116_CB411372990_.jpg"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Jan21/GWQC/8thjan/laundry_RC_set1_1x._SY116_CB411372990_.jpg"
          link="visit the store"
        />
        <Tag
          title="For a productive home office"
          url="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/GW/Dashboard/WFH_GW_DC_379x304._SY304_CB417122473_.jpg"
          link="see more"
        />
      </div>
      <div className="home__row">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <ProductImg
          title="All your grocery essentials | Amazon fresh"
          img1="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/GW/Desktop/DesktopQC_NB_1X._SY116_CB448757679_.jpg"
          img2="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/GW/Desktop/DesktopQC_Diapers_1X._SY116_CB448757679_.jpg"
          img3="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/GW/Desktop/DesktopQC_AllBaby_1X._SY116_CB448757679_.jpg"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/GW/Desktop/DesktopQC_Premium_1X._SY116_CB448757679_.jpg"
          link="visit the store"
        />
        <Tag
          title="For a productive home office"
          url="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2020/GW/PSS_260x260._SY304_CB429046195_.jpg"
          link="see more"
        />
        <Tag
          title="Pick a musical hobby for the New Year"
          url="https://images-eu.ssl-images-amazon.com/images/G/31/img20/MusicalInstruments/BAU/GW/CCPCCard/MI_1_DCC_1x._SY304_CB414096357_.jpg"
          link="see more"
        />
        <Tag
          title="Save up to 40% | Amazon Pantry"
          url="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/January2021/GW_MSO/CC_379x304._SY304_CB411921708_.jpg"
          link="see more"
        />
      </div>
      
    </div>
  );
}

export default Home;
