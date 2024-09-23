import React, { useState } from 'react';
import { publicClient } from '../../../clients'; // Đảm bảo đường dẫn client là chính xác
import { contract } from '../LendingPoolAbi'; // Thay thế bằng ABI của bạn
import { useAccount } from 'wagmi'; 
import { Address } from 'viem';

const GetCollateralDetails = () => {
    const [userAddress, setUserAddress] = useState<string>('');
    const [collateralDetails, setCollateralDetails] = useState<any[]>([]);
    const account = useAccount();

    const getCollateralDetails = async () => {
        if (!userAddress) {
            alert('Please provide a user address.');
            return;
        }

        try {
            const detailsResult = await publicClient.readContract({
                abi: contract.abi,
                address: contract.address as Address,
                functionName: 'getCollateralDetails',
                args: [userAddress],
            });

            // Chuyển đổi giá trị thành mảng các đối tượng
            setCollateralDetails(detailsResult as any[]); 
        } catch (error) {
            console.error('Error fetching collateral details:', error);
            setCollateralDetails([]); // Đặt lại giá trị khi có lỗi
        }
    };

    return (
        <div className="form-container">
            <h2>Get Collateral Details</h2>
            <input
                type='text'
                placeholder='Enter user address'
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
            />
            <button type='button' onClick={getCollateralDetails}>Get Collateral</button>
            <div className="collateral">
                <h6>Collateral Details:</h6>
                <ul>
                    {collateralDetails.length > 0 ? collateralDetails.map((detail, index) => (
                        <li key={index}>
                            Asset Address: {detail.assetAddress}, Amount: {detail.amount.toString()}
                        </li>
                    )) : (
                        <li>N/A</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default GetCollateralDetails;
