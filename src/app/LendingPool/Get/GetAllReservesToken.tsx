"use client";

import React, { useState } from 'react';
import { publicClient } from '../../../clients';
import { contract } from '../LendingPoolAbi'; // Thay đổi đường dẫn đúng với ABI của bạn
import { useAccount } from 'wagmi'; 
import { Address } from 'viem';

const GetAllReservesTokens = () => {
    const [tokens, setTokens] = useState<{ symbol: string; assetAddress: string }[]>([]);
    const account = useAccount();

    const getAllTokens = async () => {
        try {
            const tokensResult = await publicClient.readContract({
                abi: contract.abi,
                address: contract.address as Address,
                functionName: 'getAllReservesTokens',
                args: [],
            });
            setTokens(tokensResult as { symbol: string; assetAddress: string }[]); 
        } catch (error) {
            console.error('Error fetching tokens:', error);
        }
    }

    return (
        <div className="form-container">
            <h2>Get All Reserves Tokens</h2>
            <button type='button' onClick={getAllTokens}>Get Tokens</button>
            <div className="tokens">
                <h6>Tokens:</h6>
                {tokens.length > 0 ? (
                    <ul>
                        {tokens.map((token, index) => (
                            <li key={index}>
                                {token.symbol}: {token.assetAddress}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No tokens available.</p>
                )}
            </div>
        </div>
    );
};

export default GetAllReservesTokens;
