"use client";
import React, { useState } from 'react';
import { publicClient } from '../../../clients';
import { contract } from '../LendingPoolAbi'; // Thay bằng ABI của contract chứa hàm token
import { useAccount } from 'wagmi'; 
import { Address } from 'viem';

const GetToken = () => {
    const [tokenAddress, setTokenAddress] = useState<string | null>(null); 
    const account = useAccount();

    const getToken = async () => {
        try {
            const tokenResult = await publicClient.readContract({
                abi: contract.abi,
                address: contract.address as Address, 
                functionName: 'token',
                args: [],
            });
            setTokenAddress(tokenResult as string); 
        } catch (error) {
            console.error('Error fetching token address:', error);
        }
    }

    return (
        <div className="form-container">
            <h2>Get Token Address</h2>
            <button type='button' onClick={getToken}>Get Token Address</button>
            <div className="token-address">
                <h6>Token Address: {tokenAddress ? tokenAddress : 'N/A'}</h6>
            </div>
        </div>
    );
};

export default GetToken;
