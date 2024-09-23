import React, { useState } from 'react';
import { publicClient } from '../../../clients';
import { contract } from '../CollateralManagerAbi'; // Thay thế bằng ABI file của bạn
import { useAccount } from 'wagmi'; 
import { Address } from 'viem';

const GetCollateralAssets = () => {
    const [amount, setAmount] = useState<number | null>(null);
    const [isLocked, setIsLocked] = useState<boolean | null>(null);
    const [userAddress, setUserAddress] = useState<string>(''); 
    const [assetAddress, setAssetAddress] = useState<string>('');
    const account = useAccount();

    const getCollateralAssets = async () => {
        try {
            const collateralResult = await publicClient.readContract({
                abi: contract.abi,
                address: contract.address as Address, 
                functionName: 'collateralAssets',
                args: [userAddress, assetAddress],
            });

            // Ép kiểu cho kết quả trả về từ contract
            const [fetchedAmount, fetchedIsLocked] = collateralResult as [number, boolean];

            setAmount(fetchedAmount);
            setIsLocked(fetchedIsLocked);
        } catch (error) {
            console.error('Error fetching collateral assets:', error);
        }
    }

    return (
        <div className="form-container">
            <h2>Get Collateral Assets</h2>
            <label htmlFor='userAddress'>User Address</label>
            <input
                type='text'
                name='userAddress'
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
            />
            <label htmlFor='assetAddress'>Asset Address</label>
            <input
                type='text'
                name='assetAddress'
                value={assetAddress}
                onChange={(e) => setAssetAddress(e.target.value)}
            />
            <button type='button' onClick={getCollateralAssets}>Get Collateral Assets</button>
            <div className="collateral-info">
                <h6>Amount: {amount !== null ? amount : 'N/A'}</h6>
                <h6>Is Locked: {isLocked !== null ? (isLocked ? 'Yes' : 'No') : 'N/A'}</h6>
            </div>
        </div>
    );
};

export default GetCollateralAssets;
