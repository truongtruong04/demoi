"use client";
import React, { useState } from 'react';
import { publicClient, walletClient } from '../../../clients'; // Cập nhật đường dẫn đến client của bạn
import { contract } from '../PriceOracleAbi'; // Đảm bảo import ABI đúng
import { useAccount } from 'wagmi';
import { Address } from 'viem';

const SetInitialAssetPrice = () => {
  const [assetAddress, setAssetAddress] = useState<string>('');
  const [initialPrice, setInitialPrice] = useState<number | ''>('');
  const account = useAccount();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!assetAddress || initialPrice === '') {
      alert('Please provide both asset address and initial price.');
      return;
    }

    try {
      const { request } = await publicClient.simulateContract({
        abi: contract.abi,
        address: contract.address as Address, 
        functionName: 'setInitialAssetPrice',
        args: [assetAddress, initialPrice],
        account: account.address as Address,
      });

      const hash = await walletClient.writeContract(request);
      console.log('Transaction hash:', hash);
    } catch (error) {
      console.error('Error calling setInitialAssetPrice:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Set Initial Asset Price</h2>
      <form onSubmit={submit}>
        <label htmlFor='assetAddress'>Asset Address</label>
        <input
          type='text'
          name='assetAddress'
          value={assetAddress}
          onChange={(e) => setAssetAddress(e.target.value)}
        />
        <label htmlFor='initialPrice'>Initial Price</label>
        <input
          type='number'
          name='initialPrice'
          value={initialPrice}
          onChange={(e) => setInitialPrice(Number(e.target.value))}
        />
        <button type='submit'>Set Price</button>
      </form>
    </div>
  );
};

export default SetInitialAssetPrice;
