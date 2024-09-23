import React, { useState } from 'react';
import { publicClient } from '../../../clients'; // Đảm bảo đường dẫn client là chính xác
import { contract } from '../PriceOracleAbi'; // Thay thế bằng ABI của bạn
import { useAccount } from 'wagmi'; 
import { Address } from 'viem';

const GetAssetPrice = () => {
    const [assetAddress, setAssetAddress] = useState<string>('');
    const [price, setPrice] = useState<string | null>(null);
    const account = useAccount();

    const getAssetPrice = async () => {
        if (!assetAddress) {
            alert('Please provide an asset address.');
            return;
        }

        try {
            const priceResult = await publicClient.readContract({
                abi: contract.abi,
                address: contract.address as Address,
                functionName: 'getAssetPrice',
                args: [assetAddress],
            });

            // Chuyển đổi giá trị thành chuỗi, nếu priceResult là một số
            setPrice(priceResult ? priceResult.toString() : null);
        } catch (error) {
            console.error('Error fetching asset price:', error);
        }
    }

    return (
        <div className="form-container">
            <h2>Get Asset Price</h2>
            <input
                type='text'
                placeholder='Enter asset address'
                value={assetAddress}
                onChange={(e) => setAssetAddress(e.target.value)}
            />
            <button type='button' onClick={getAssetPrice}>Get Price</button>
            <div className="price">
                <h6>Price: {price !== null ? price : 'N/A'}</h6>
            </div>
        </div>
    );
};

export default GetAssetPrice;
