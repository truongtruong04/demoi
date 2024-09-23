"use client";
import React, { useState } from 'react';
import { publicClient } from '../../../clients';
import { contract } from '../LendingPoolAbi'; // Thay thế bằng ABI của bạn
import { useAccount } from 'wagmi';
import { Address } from 'viem';

interface ReserveToken {
    symbol: string;
    assetAddress: string;
}

const GetReserveTokens = () => {
    const [tokenSymbol, setTokenSymbol] = useState<string | null>(null);
    const [assetAddress, setAssetAddress] = useState<string | null>(null);
    const [tokenIndex, setTokenIndex] = useState<number>(0); // Sử dụng để nhập chỉ số token
    const account = useAccount();

    const getReserveTokens = async () => {
        try {
            const tokenResult = await publicClient.readContract({
                abi: contract.abi,
                address: contract.address as Address,
                functionName: 'reserveTokens',
                args: [BigInt(tokenIndex)], // Truyền chỉ số token vào hàm
            });

            // Cast tokenResult to the ReserveToken type
            const reserveToken = tokenResult as ReserveToken;

            setTokenSymbol(reserveToken.symbol); 
            setAssetAddress(reserveToken.assetAddress); 
        } catch (error) {
            console.error('Error fetching reserve token:', error);
        }
    }

    return (
        <div className="form-container">
            <h2>Get Reserve Token</h2>
            <label htmlFor='tokenIndex'>Token Index</label>
            <input
                type='number'
                name='tokenIndex'
                value={tokenIndex}
                onChange={(e) => setTokenIndex(Number(e.target.value))}
            />
            <button type='button' onClick={getReserveTokens}>Get Reserve Token</button>
            <div className="token-info">
                <h6>Token Symbol: {tokenSymbol ? tokenSymbol : 'N/A'}</h6>
                <h6>Asset Address: {assetAddress ? assetAddress : 'N/A'}</h6>
            </div>
        </div>
    );
};

export default GetReserveTokens;
