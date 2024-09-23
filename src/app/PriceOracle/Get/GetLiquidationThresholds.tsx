import React, { useState } from 'react';
import { publicClient } from '../../../clients';
import { contract } from '../PriceOracleAbi';
import { useAccount } from 'wagmi';
import { Address } from 'viem';

const GetLiquidationThreshold = () => {
  const [assetAddress, setAssetAddress] = useState<string>(''); // State for input asset address
  const [threshold, setThreshold] = useState<string | null>(null); // State for liquidation threshold
  const account = useAccount();

  const getThreshold = async () => {
    if (!assetAddress) {
      alert('Please provide an asset address.');
      return;
    }

    try {
      // Call the contract function
      const thresholdResult = await publicClient.readContract({
        abi: contract.abi,
        address: contract.address as Address,
        functionName: 'getLiquidationThreshold',
        args: [assetAddress],
      });

      // Cast the result to the expected type (string or BigInt)
      setThreshold((thresholdResult as BigInt).toString()); // Cast to BigInt and convert to string
    } catch (error) {
      console.error('Error fetching liquidation threshold:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Get Liquidation Threshold</h2>
      <label htmlFor="assetAddress">Asset Address</label>
      <input
        type="text"
        name="assetAddress"
        value={assetAddress}
        onChange={(e) => setAssetAddress(e.target.value)}
      />
      <button type="button" onClick={getThreshold}>Get Threshold</button>
      <div className="threshold">
        <h6>Liquidation Threshold: {threshold ? threshold : 'N/A'}</h6>
      </div>
    </div>
  );
};

export default GetLiquidationThreshold;
