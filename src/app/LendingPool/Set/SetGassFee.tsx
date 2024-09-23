"use client";

import React, { useState } from 'react';
import { publicClient, walletClient } from '../../../clients';
import { contract } from '../LendingPoolAbi'; // Thay đổi đường dẫn đúng với ABI của bạn
import { useAccount } from 'wagmi';
import { Address } from 'viem';

const SetGassFee = () => {
  const [gassFee, setGassFee] = useState<string>('');
  const account = useAccount();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!gassFee) {
      alert('Please provide a Gas Fee.');
      return;
    }

    try {
      const { request } = await publicClient.simulateContract({
        abi: contract.abi,
        address: contract.address as Address, 
        functionName: 'setGassFee',
        args: [gassFee],
        account: account.address as Address,
      });

      const hash = await walletClient.writeContract(request);
      console.log('Transaction hash:', hash);
    } catch (error) {
      console.error('Error calling setGassFee:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Set Gas Fee</h2>
      <form onSubmit={submit}>
        <label htmlFor='gassFee'>Gas Fee</label>
        <input
          type='text'
          name='gassFee'
          value={gassFee}
          onChange={(e) => setGassFee(e.target.value)}
        />
        <button type='submit'>Set Gas Fee</button>
      </form>
    </div>
  );
};

export default SetGassFee;
