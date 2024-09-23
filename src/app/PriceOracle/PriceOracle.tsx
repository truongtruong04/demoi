"use client";

import React from "react";
import SetInitialAssetPrice from "./Set/SetInitialAssetPrice";
import UpdateAssetPrice from "./Set/UpdateAssetPrice";
import SetLiquidationThreshold from "./Set/setDefaultLiquidationThreshold";
import UpdateLiquidationThreshold from "./Set/UpdateLiquidationThreshold";

import GetAssetPrices from "./Get/GetAssetPrices";
import GetOwner from "./Get/GetOwner";
import GetLiquidationThreshold from "./Get/GetLiquidationThresholds";
import App from "../connect";
const PriceOrcale = () => {
  return (
    <div className="main-container ">
      <App />
      <div className="grid-container">
        <div className="colum1">
          <SetInitialAssetPrice />
          <UpdateAssetPrice />
          <SetLiquidationThreshold />
          <UpdateLiquidationThreshold />
          
        </div>
        <div className="colum2">
          <GetAssetPrices />
          <GetOwner />
          <GetLiquidationThreshold />
        
        </div>
      </div>
    </div>
  );
};
export default PriceOrcale;
