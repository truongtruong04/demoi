"use client";

import React, { useState } from 'react';
import { publicClient } from '../../../clients';
import { contract } from '../LendingPoolAbi'; // Thay thế bằng ABI của contract của bạn
import { useAccount } from 'wagmi'; 
import { Address } from 'viem';

const GetAdmin = () => {
    const [admin, setAdmin] = useState<string | null>(null); 
    const account = useAccount();

    const getAdmin = async () => {
        try {
            const adminResult = await publicClient.readContract({
                abi: contract.abi, // Sử dụng ABI của contract
                address: contract.address as Address, // Địa chỉ contract
                functionName: 'admin', // Tên function trong ABI
                args: [], // Không có tham số đầu vào
            });
            setAdmin(adminResult as string); 
        } catch (error) {
            console.error('Error fetching admin:', error);
        }
    }

    return (
        <div className="form-container">
            <h2>Get Admin</h2>
            <button type='button' onClick={getAdmin}>Get Admin</button>
            <div className="admin">
                <h6>Admin: {admin ? admin : 'N/A'}</h6>
            </div>
        </div>
    );
};

export default GetAdmin;
