'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useState } from "react";
import { type State, WagmiProvider } from "wagmi";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./Nav/Nav";

import PriceOracle from "./PriceOracle/PriceOracle";
import CollateralManager from "./CollateralManager/CollateralManager";
import LendingPool from "./LendingPool/LendingPool";


import "../app/page.css";
function App(){
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/collateralmanager" element={<CollateralManager />} />
        <Route path="/priceoracle" element={<PriceOracle />} />
        <Route path="/lendingpool" element={<LendingPool />} />

      </Routes>
    </Router>
  );
  
};
export default App;