"use client";
import React, { useState } from 'react';
import { publicClient } from '../../../clients'; // Đảm bảo rằng đường dẫn là chính xác
import { contract } from '../CollateralManagerAbi'; // Thay thế bằng tên file chứa ABI
import { useAccount } from 'wagmi'; 
import { Address } from 'viem';

const GetRemoveCollateralFee = () => {
    const [removeCollateralFee, setRemoveCollateralFee] = useState<number | null>(null); 
    const account = useAccount();

    const getRemoveCollateralFee = async () => {
        try {
            const feeResult = await publicClient.readContract({
                abi: contract.abi,
                address: contract.address as Address, 
                functionName: 'removeCollateralFee',
                args: [],
            });

            // Kiểm tra kiểu dữ liệu và đặt giá trị
            if (typeof feeResult === 'bigint') {
                setRemoveCollateralFee(Number(feeResult)); // Chuyển đổi bigint thành số
            } else {
                setRemoveCollateralFee(feeResult as number); 
            }
        } catch (error) {
            console.error('Error fetching removeCollateralFee:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Get Remove Collateral Fee</h2>
            <button type='button' onClick={getRemoveCollateralFee}>Get Remove Collateral Fee</button>
            <div className="fee">
                <h6>Remove Collateral Fee: {removeCollateralFee !== null ? removeCollateralFee : 'N/A'}</h6>
            </div>
        </div>
    );
};

export default GetRemoveCollateralFee;
