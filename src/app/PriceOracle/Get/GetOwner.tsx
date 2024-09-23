import React, { useState } from 'react';
import { publicClient } from '../../../clients'; // Cập nhật đường dẫn đến client của bạn
import { contract } from '../PriceOracleAbi'; // Đảm bảo import ABI đúng
import { Address } from 'viem'; 

const GetOwner = () => {
    const [owner, setOwner] = useState<string | null>(null); 

    const getOwner = async () => {
        try {
            const ownerResult = await publicClient.readContract({
                abi: contract.abi,
                address: contract.address as Address, 
                functionName: 'owner',
                args: [], // Hàm không có tham số đầu vào
            });
            setOwner(ownerResult as string); 
        } catch (error) {
            console.error('Error fetching owner:', error);
        }
    }

    return (
        <div className="form-container">
            <h2>Get Owner</h2>
            <button type='button' onClick={getOwner}>Get Owner</button>
            <div className="owner">
                <h6>Owner: {owner ? owner : 'N/A'}</h6>
            </div>
        </div>
    );
};

export default GetOwner;
