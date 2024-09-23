"use client";
import React, { useState } from 'react';
import { publicClient, walletClient } from '../../../clients';
import { contract } from '../CollateralManagerAbi'; // Thay thế bằng tên file chứa ABI
import { useAccount } from 'wagmi';
import { Address } from 'viem';

const RequestLoan = () => {
  const [collateralAsset, setCollateralAsset] = useState<string>('');
  const [loanAmount, setLoanAmount] = useState<number | string>('');
  const account = useAccount();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!collateralAsset || !loanAmount) {
      alert('Please provide both collateral asset address and loan amount.');
      return;
    }

    try {
      const { request } = await publicClient.simulateContract({
        abi: contract.abi,
        address: contract.address as Address, 
        functionName: 'requestLoan',
        args: [collateralAsset, loanAmount],
        account: account.address as Address,
      });

      const hash = await walletClient.writeContract(request);
      console.log('Transaction hash:', hash);
    } catch (error) {
      console.error('Error calling requestLoan:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Request Loan</h2>
      <form onSubmit={submit}>
        <label htmlFor='collateralAsset'>Collateral Asset Address</label>
        <input
          type='text'
          name='collateralAsset'
          value={collateralAsset}
          onChange={(e) => setCollateralAsset(e.target.value)}
        />
        <label htmlFor='loanAmount'>Loan Amount</label>
        <input
          type='number'
          name='loanAmount'
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        <button type='submit'>Request Loan</button>
      </form>
    </div>
  );
};

export default RequestLoan;
