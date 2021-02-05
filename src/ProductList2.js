import React from "react";
import ImageProduct from "./ImageProduct";
import "./ProductList2.css";
function ProductList2({title,link}) {
  return (
    <div className="productList2">
      <div className="productList2__text">
        <h5>{title}</h5>
        <p className="productList2__link"> {link}</p>
      </div>
      <div className="productList2__image">
        <ImageProduct
          url="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/GW2021/T1/shoveler_top10_390X498_1xa._CB411878777_.jpg"
          
        />
        <ImageProduct
          url="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/JanART21/RecentLaunches/GW/DesktopShoveler_200x200._CB412038207_.jpg"
          
        />
        <ImageProduct
          url="https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/FoundIt/GIS/GIF_Shoveler_FI_grooming_essentials_1x._CB411990972_.jpg"
          
        />
        <ImageProduct
          url="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/GW2021/T1a/DesktopShoveler_200x200-WL._CB411867258_.jpg"
          
        />
        <ImageProduct
          url="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/GW2021/T1a/DesktopShoveler_200x200-CEPCr._CB411938618_.jpg"
          
        />
        <ImageProduct
          url="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/GW2021/T1a/DesktopShoveler_200x200-ohl._CB411867258_.jpg"
          
        />
        <ImageProduct
          url="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/GW2021/T1a/DesktopShoveler_200x200-cons._CB411867258_.jpg"
          
        />
        <ImageProduct
          url="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/GW2021/T1a/DesktopShoveler_200x200-SL._CB411867259_.jpg"
        />
        <ImageProduct
          url="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/GW2021/T1a/DesktopShoveler_200x200-LATV._CB411867258_.jpg"
        />
        <ImageProduct
          url="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/GW2021/T1a/DesktopShoveler_200x200-PB._CB411867258_.jpg"
        />
        <ImageProduct
          url="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/GW2021/T1a/DesktopShoveler_200x200-media._CB411867258_.jpg"
        />
        <ImageProduct
          url="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/GW2021/T1a/DesktopShoveler_200x200-devices._CB411867258_.jpg"
        />
        <ImageProduct
          url="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/GW2021/T1a/DesktopShoveler_200x200-SMB._CB411867258_.jpg"
        />
      </div>
    </div>
  );
}

export default ProductList2;
