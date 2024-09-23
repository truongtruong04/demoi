"use client";
import React, { useState } from 'react';
import { publicClient, walletClient } from '../../../clients';
import { contract } from '../CollateralManagerAbi'; // Thay thế bằng tên file chứa ABI
import { useAccount } from 'wagmi';
import { Address } from 'viem';

const RejectLoan = () => {
  const [requestId, setRequestId] = useState<number | string>('');
  const account = useAccount();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!requestId) {
      alert('Please provide a loan request ID.');
      return;
    }

    try {
      const { request } = await publicClient.simulateContract({
        abi: contract.abi,
        address: contract.address as Address, 
        functionName: 'rejectLoan',
        args: [Number(requestId)], // Chuyển đổi requestId sang số
        account: account.address as Address,
      });

      const hash = await walletClient.writeContract(request);
      console.log('Transaction hash:', hash);
    } catch (error) {
      console.error('Error calling rejectLoan:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Reject Loan</h2>
      <form onSubmit={submit}>
        <label htmlFor='requestId'>Loan Request ID</label>
        <input
          type='number'
          name='requestId'
          value={requestId}
          onChange={(e) => setRequestId(e.target.value)}
        />
        <button type='submit'>Reject Loan</button>
      </form>
    </div>
  );
};

export default RejectLoan;
