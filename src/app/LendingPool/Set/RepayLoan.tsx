import React, { useState } from 'react';
import { publicClient, walletClient } from '../../../clients';
import { contract } from '../LendingPoolAbi'; // Sử dụng ABI của contract của bạn
import { useAccount } from 'wagmi';
import { Address } from 'viem';

const RepayLoan = () => {
  const [repayAmount, setRepayAmount] = useState<string>('');
  const account = useAccount();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!repayAmount) {
      alert('Please provide an amount to repay.');
      return;
    }

    try {
      const { request } = await publicClient.simulateContract({
        abi: contract.abi,
        address: contract.address as Address, 
        functionName: 'repay',
        args: [BigInt(repayAmount)],
        account: account.address as Address,
      });

      const hash = await walletClient.writeContract(request);
      console.log('Transaction hash:', hash);
    } catch (error) {
      console.error('Error calling repay:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Repay Loan</h2>
      <form onSubmit={submit}>
        <label htmlFor='repayAmount'>Repay Amount</label>
        <input
          type='number'
          name='repayAmount'
          value={repayAmount}
          onChange={(e) => setRepayAmount(e.target.value)}
        />
        <button type='submit'>Repay</button>
      </form>
    </div>
  );
};

export default RepayLoan;
