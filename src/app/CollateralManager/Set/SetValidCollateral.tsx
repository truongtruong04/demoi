"use client";
import React, { useState } from 'react';
import { publicClient, walletClient } from '../../../clients';
import { contract } from '../CollateralManagerAbi'; // Thay thế bằng tên file chứa ABI của bạn
import { useAccount } from 'wagmi';
import { Address } from 'viem';

const SetValidCollateral = () => {
  const [token, setToken] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const account = useAccount();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token) {
      alert('Please provide a token address.');
      return;
    }

    try {
      const { request } = await publicClient.simulateContract({
        abi: contract.abi,
        address: contract.address as Address,
        functionName: 'setValidCollateral',
        args: [token, isValid],
        account: account.address as Address,
      });

      const hash = await walletClient.writeContract(request);
      console.log('Transaction hash:', hash);
    } catch (error) {
      console.error('Error calling setValidCollateral:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Set Valid Collateral</h2>
      <form onSubmit={submit}>
        <label htmlFor='token'>Token Address</label>
        <input
          type='text'
          name='token'
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <label htmlFor='isValid'>Is Valid</label>
        <select
          name='isValid'
          value={isValid ? 'true' : 'false'}
          onChange={(e) => setIsValid(e.target.value === 'true')}
        >
          <option value='true'>True</option>
          <option value='false'>False</option>
        </select>
        <button type='submit'>Set Valid Collateral</button>
      </form>
    </div>
  );
};

export default SetValidCollateral;
