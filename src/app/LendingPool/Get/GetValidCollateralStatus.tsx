"use client";
import React, { useState } from 'react';
import { publicClient } from '../../../clients'; // Đảm bảo đường dẫn client là chính xác
import { contract } from '../../CollateralManager/CollateralManagerAbi'; // Thay thế bằng ABI của bạn
import { useAccount } from 'wagmi';
import { Address } from 'viem';

const GetValidCollateralStatus = () => {
    const [tokenAddress, setTokenAddress] = useState<string>(''); 
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const account = useAccount();

    const getCollateralStatus = async () => {
        if (!tokenAddress) {
            alert('Please provide a token address.');
            return;
        }

        try {
            const statusResult = await publicClient.readContract({
                abi: contract.abi,
                address: contract.address as Address, 
                functionName: 'getValidCollateralStatus',
                args: [tokenAddress],
            });
            setIsValid(statusResult as boolean); 
        } catch (error) {
            console.error('Error fetching collateral status:', error);
        }
    }

    return (
        <div className="form-container">
            <h2>Get Valid Collateral Status</h2>
            <input
                type='text'
                placeholder='Enter Token Address'
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
            />
            <button type='button' onClick={getCollateralStatus}>Get Status</button>
            <div className="collateral-status">
                <h6>Status: {isValid !== null ? (isValid ? 'Valid' : 'Invalid') : 'N/A'}</h6>
            </div>
        </div>
    );
};

export default GetValidCollateralStatus;
