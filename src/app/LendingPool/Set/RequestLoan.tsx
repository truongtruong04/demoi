"use client";

import React, { useState } from 'react';
import { publicClient, walletClient } from '../../../clients';
import { contract } from '../LendingPoolAbi'; // Thay thế bằng ABI của bạn
import { useAccount } from 'wagmi';
import { Address } from 'viem';

const RequestLoan = () => {
  const [amount, setAmount] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');
  const [repaymentPeriod, setRepaymentPeriod] = useState<string>('');
  const [collateralAsset, setCollateralAsset] = useState<string>('');
  const [collateralAmount, setCollateralAmount] = useState<string>('');
  const account = useAccount();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!amount || !interestRate || !repaymentPeriod || !collateralAsset || !collateralAmount) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const { request } = await publicClient.simulateContract({
        abi: contract.abi,
        address: contract.address as Address,
        functionName: 'requestLoan',
        args: [
          BigInt(amount), 
          BigInt(interestRate), 
          BigInt(repaymentPeriod), 
          collateralAsset as Address, 
          BigInt(collateralAmount)
        ],
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
        <label htmlFor='amount'>Amount</label>
        <input
          type='number'
          name='amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label htmlFor='interestRate'>Interest Rate (%)</label>
        <input
          type='number'
          name='interestRate'
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />

        <label htmlFor='repaymentPeriod'>Repayment Period (days)</label>
        <input
          type='number'
          name='repaymentPeriod'
          value={repaymentPeriod}
          onChange={(e) => setRepaymentPeriod(e.target.value)}
        />

        <label htmlFor='collateralAsset'>Collateral Asset Address</label>
        <input
          type='text'
          name='collateralAsset'
          value={collateralAsset}
          onChange={(e) => setCollateralAsset(e.target.value)}
        />

        <label htmlFor='collateralAmount'>Collateral Amount</label>
        <input
          type='number'
          name='collateralAmount'
          value={collateralAmount}
          onChange={(e) => setCollateralAmount(e.target.value)}
        />

        <button type='submit'>Request Loan</button>
      </form>
    </div>
  );
};

export default RequestLoan;
