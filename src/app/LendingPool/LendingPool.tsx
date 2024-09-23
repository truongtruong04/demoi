"use client ";
import React from "react";
import App from "../connect";
import GetAdmin from "./Get/GetAdmin";
import GetGassFee from "./Get/GetGassFee";
import GetCollateralManagerAddress from "./Get/GetCollateralAddress";
import CalculateInterest from "./Get/CaculateInterest";
import GetAllReservesTokens from "./Get/GetAllReservesToken";
import GetAssetPrice from "./Get/GetAssetPrice";
import GetCollateralDetails from "./Get/GetCollateralDetails";
import GetLoanDetails from "./Get/GetLoanDetails";
import GetValidCollateralStatus from "./Get/GetValidCollateralStatus";
import GetLoanDetailse from "./Get/GetLoanDetailse";
import GetReserveTokens from "./Get/GetReserveTokens";
import GetToken from "./Get/GetToken";

import SetGassFee from "./Set/SetGassFee";
import ApproveLoan from "./Set/ApprovedLoan";
import DepositAsset from "./Set/DepositAddress";
import Liquidate from "./Set/Liquidate";
import RejectLoan from "./Set/RejectLoan";
import RepayLoan from "./Set/RepayLoan";
import RequestLoan from "./Set/RequestLoan";
import SetToken from "./Set/SetToken";
const LendingPool = () => {
    return (
        <div className="main-container ">
      <App />
      <div className="grid-container">
        <div className="colum1">
            <GetAdmin />
            <GetGassFee />
            <GetCollateralManagerAddress />
            <CalculateInterest />
            <GetAllReservesTokens />
            <GetAssetPrice />
            <GetCollateralDetails />
            <GetLoanDetails />
            <GetValidCollateralStatus />
            <GetLoanDetailse />
            <GetReserveTokens />
            <GetToken />
          
        </div>
        <div className="colum2">
            <SetGassFee />
            <ApproveLoan />
            <DepositAsset />
            <Liquidate />
            <RejectLoan />
            <RepayLoan />
            <RequestLoan />
            <SetToken />

         
        
        </div>
      </div>
    </div>
  );
};
export default LendingPool;
