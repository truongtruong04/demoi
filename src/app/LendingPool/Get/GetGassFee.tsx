
"use client";
import React, { useState, useEffect } from 'react';
import { publicClient } from '../../../clients';
import { contract } from '../LendingPoolAbi'; // Thay đổi đường dẫn đúng với ABI của bạn
import { useAccount } from 'wagmi'; 
import { Address } from 'viem';

const GetGassFee = () => {
    const [gassFee, setGassFee] = useState<number | null>(null); 
    const [error, setError] = useState<string | null>(null);
    const account = useAccount();

    const fetchGassFee = async () => {
        try {
            const feeResult = await publicClient.readContract({
                abi: contract.abi,
                address: contract.address as Address, 
                functionName: 'GassFee',
                args: [],
            });

            // Kiểm tra kiểu dữ liệu trả về
            if (typeof feeResult === 'bigint') {
                setGassFee(Number(feeResult)); // Chuyển đổi bigint sang number
            } else {
                setGassFee(feeResult as number); // Giả sử feeResult là số
            }
        } catch (error) {
            console.error('Error fetching gas fee:', error);
            setError('Failed to fetch gas fee.');
        }
    }

    useEffect(() => {
        fetchGassFee();
    }, []);

    return (
        <div className="form-container">
            <h2>Get Gas Fee</h2>
            <button type='button' onClick={fetchGassFee}>Refresh Gas Fee</button>
            {error && <div className="error">{error}</div>}
            <div className="gass-fee">
                <h6>Gas Fee: {gassFee !== null ? gassFee : 'N/A'}</h6>
            </div>
        </div>
    );
};

export default GetGassFee;
