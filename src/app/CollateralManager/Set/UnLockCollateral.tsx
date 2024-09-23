import React, { useState } from 'react';
import { publicClient, walletClient } from '../../../clients';
import { contract } from '../CollateralManagerAbi'; // Thay thế bằng tên file ABI phù hợp
import { useAccount } from 'wagmi';
import { Address } from 'viem';

const UnlockCollateral = () => {
  const [userAddress, setUserAddress] = useState<string>('');
  const [assetAddress, setAssetAddress] = useState<string>('');
  const [amount, setAmount] = useState<number | string>(''); // Dùng number hoặc string
  const account = useAccount();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userAddress || !assetAddress || !amount) {
      alert('Please provide user address, asset address, and amount.');
      return;
    }

    try {
      const { request } = await publicClient.simulateContract({
        abi: contract.abi,
        address: contract.address as Address, 
        functionName: 'unlockCollateral',
        args: [userAddress, assetAddress, Number(amount)], // Chuyển amount sang kiểu số
        account: account.address as Address,
      });

      const hash = await walletClient.writeContract(request);
      console.log('Transaction hash:', hash);
    } catch (error) {
      console.error('Error calling unlockCollateral:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Unlock Collateral</h2>
      <form onSubmit={submit}>
        <label htmlFor='userAddress'>User Address</label>
        <input
          type='text'
          name='userAddress'
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
        />
        <label htmlFor='assetAddress'>Asset Address</label>
        <input
          type='text'
          name='assetAddress'
          value={assetAddress}
          onChange={(e) => setAssetAddress(e.target.value)}
        />
        <label htmlFor='amount'>Amount</label>
        <input
          type='number'
          name='amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type='submit'>Unlock Collateral</button>
      </form>
    </div>
  );
};

export default UnlockCollateral;
