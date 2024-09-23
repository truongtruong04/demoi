"use client";
import React, { useState } from 'react';
import { publicClient } from '../../../clients';
import { contract } from '../CollateralManagerAbi'; // Thay thế bằng tên file chứa ABI
import { useAccount } from 'wagmi';
import { Address } from 'viem';

const GetAdmin = () => {
    const [admin, setAdmin] = useState<string | null>(null);
    const account = useAccount();

    const getAdmin = async () => {
        try {
            const adminResult = await publicClient.readContract({
                abi: contract.abi,
                address: contract.address as Address,
                functionName: 'admin',
                args: [],
            });
            setAdmin(adminResult as string);
        } catch (error) {
            console.error('Error fetching admin:', error);
        }
    };

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
