"use client";

import React from "react";
import GetAdmin from "./Get/GetAdmin";
import GetPriceOracle from "./Get/GetPriceOracleAddress";
import GetAssetPrice from "./Get/GetAssetPrice";
import  GetAddCollateralFee from "./Get/GetAddCollateralFee";
import GetValidCollateralStatus from "./Get/GetValidCollateralStatus";
import GetValidCollateralToken from "./Get/GetValidCollateralToken";
import GetRemoveCollateralFee from "./Get/GetRemoveCollateralFee";
import ViewLoanRequests from "./Get/ViewLoanReQuests";
import GetLoanRequest from "./Get/GetLoanRequests";
import GetCollateralAsset from "./Get/GetCollateralAsset";

import SetContractAddress from "./Set/SetContractAddress";
import SetFees from "./Set/SetFee";
import AddCollateral from "./Set/AddCollateral";
import SetValidCollateral from "./Set/SetValidCollateral";
import UpdatePriceOracle from "./Set/UpdateValidCollateral";
import RemoveCollateral from "./Set/RemoveCollateral";
import RequestLoan from "./Set/RequestLoan";
import ApproveLoan from "./Set/ApproveLoan";
import RejectLoan from "./Set/RejectLoan";
import LockCollateral from "./Set/LockCollateral";
import UnlockCollateral from "./Set/UnLockCollateral";


import App from "../connect";
const CollateralManager = () => {
  return (
    <div className="main-container ">
      <App />
      <div className="grid-container">
        <div className="colum1">
            <SetContractAddress />
            <SetFees />
            <AddCollateral />
            <SetValidCollateral />
            <UpdatePriceOracle />
            <RemoveCollateral />
            <RequestLoan />
            <ApproveLoan />
            <RejectLoan />
            <LockCollateral />
            <UnlockCollateral />

            
        </div>
        <div className="colum2">
            <GetAdmin />
            <GetPriceOracle />
            <GetAssetPrice />
            <GetAddCollateralFee />
            <GetValidCollateralStatus />    
            <GetValidCollateralToken />      
            <GetRemoveCollateralFee /> 
            <ViewLoanRequests />
            <GetLoanRequest />
            <GetCollateralAsset />
        </div>
      </div>
    </div>
  );
};
export default CollateralManager;
