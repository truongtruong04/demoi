import React, { useState } from 'react';
import { publicClient } from '../../../clients';
import { contract } from '../CollateralManagerAbi'; // Thay thế bằng tên file chứa ABI của bạn
import { useAccount } from 'wagmi';
import { Address } from 'viem';

const GetValidCollateralStatus = () => {
    const [tokenAddress, setTokenAddress] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const account = useAccount();

    const getValidCollateralStatus = async () => {
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
            console.error('Error fetching valid collateral status:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Get Valid Collateral Status</h2>
            <input
                type='text'
                placeholder='Enter Token Address'
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
            />
            <button type='button' onClick={getValidCollateralStatus}>Get Status</button>
            <div className="status">
                <h6>Status: {isValid !== null ? (isValid ? 'Valid' : 'Invalid') : 'N/A'}</h6>
            </div>
        </div>
    );
};

export default GetValidCollateralStatus;
