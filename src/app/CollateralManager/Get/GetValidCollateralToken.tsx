import React, { useState } from 'react';
import { publicClient } from '../../../clients';
import { contract } from '../CollateralManagerAbi'; // Thay thế bằng tên file chứa ABI của bạn
import { useAccount } from 'wagmi';
import { Address } from 'viem';

const GetValidCollateralToken = () => {
    const [tokenAddress, setTokenAddress] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const account = useAccount();

    const getValidCollateralToken = async () => {
        if (!tokenAddress) {
            alert('Please provide a token address.');
            return;
        }

        try {
            const validResult = await publicClient.readContract({
                abi: contract.abi,
                address: contract.address as Address,
                functionName: 'validCollateralTokens',
                args: [tokenAddress],
            });
            setIsValid(validResult as boolean);
        } catch (error) {
            console.error('Error fetching valid collateral token status:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Get Valid Collateral Token Status</h2>
            <input
                type='text'
                placeholder='Enter Token Address'
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
            />
            <button type='button' onClick={getValidCollateralToken}>Get Status</button>
            <div className="status">
                <h6>Status: {isValid !== null ? (isValid ? 'Valid' : 'Invalid') : 'N/A'}</h6>
            </div>
        </div>
    );
};

export default GetValidCollateralToken;
