"use client";
import React, { useState } from 'react';
import { publicClient } from '../../../clients'; // Đảm bảo rằng đường dẫn là chính xác
import { contract } from '../CollateralManagerAbi'; // Thay thế bằng tên file chứa ABI
import { useAccount } from 'wagmi'; 
import { Address } from 'viem';

const GetAddCollateralFee = () => {
    const [addCollateralFee, setAddCollateralFee] = useState<number | null>(null); 
    const account = useAccount();

    const getAddCollateralFee = async () => {
        try {
            const feeResult = await publicClient.readContract({
                abi: contract.abi,
                address: contract.address as Address, 
                functionName: 'addCollateralFee',
                args: [],
            });

            // Kiểm tra kiểu dữ liệu và đặt giá trị
            if (typeof feeResult === 'bigint') {
                setAddCollateralFee(Number(feeResult)); // Chuyển đổi bigint thành số
            } else {
                setAddCollateralFee(feeResult as number); 
            }
        } catch (error) {
            console.error('Error fetching addCollateralFee:', error);
        }
    }

    return (
        <div className="form-container">
            <h2>Get Add Collateral Fee</h2>
            <button type='button' onClick={getAddCollateralFee}>Get Add Collateral Fee</button>
            <div className="fee">
                <h6>Add Collateral Fee: {addCollateralFee !== null ? addCollateralFee : 'N/A'}</h6>
            </div>
        </div>
    );
};

export default GetAddCollateralFee;
