"use client";

import React, { useState } from 'react';
import { publicClient } from '../../../clients';
import { contract } from '../LendingPoolAbi'; // Thay đổi đường dẫn đúng với ABI của bạn
import { useAccount } from 'wagmi'; 
import { Address } from 'viem';

const GetCollateralManagerAddress = () => {
    const [collateralManagerAddress, setCollateralManagerAddress] = useState<string | null>(null); 
    const account = useAccount();

    const getCollateralManagerAddress = async () => {
        try {
            const addressResult = await publicClient.readContract({
                abi: contract.abi,
                address: contract.address as Address, 
                functionName: 'collateralManagerAddress',
                args: [],
            });
            setCollateralManagerAddress(addressResult as string); 
        } catch (error) {
            console.error('Error fetching collateral manager address:', error);
        }
    }

    return (
        <div className="form-container">
            <h2>Get Collateral Manager Address</h2>
            <button type='button' onClick={getCollateralManagerAddress}>Get Collateral Manager Address</button>
            <div className="collateral-manager-address">
                <h6>Collateral Manager Address: {collateralManagerAddress ? collateralManagerAddress : 'N/A'}</h6>
            </div>
        </div>
    );
};

export default GetCollateralManagerAddress;
