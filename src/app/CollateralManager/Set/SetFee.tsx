"use client";
import React, { useState } from 'react';
import { publicClient, walletClient } from '../../../clients';
import { contract } from '../CollateralManagerAbi'; // Thay thế bằng tên file chứa ABI
import { useAccount } from 'wagmi';
import { Address } from 'viem';

const SetFees = () => {
    const [addCollateralFee, setAddCollateralFee] = useState<number | string>('');
    const [removeCollateralFee, setRemoveCollateralFee] = useState<number | string>('');
    const account = useAccount();

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (addCollateralFee === '' || removeCollateralFee === '') {
            alert('Please provide both fees.');
            return;
        }

        try {
            const { request } = await publicClient.simulateContract({
                abi: contract.abi,
                address: contract.address as Address,
                functionName: 'setFees',
                args: [addCollateralFee, removeCollateralFee],
                account: account.address as Address,
            });

            const hash = await walletClient.writeContract(request);
            console.log('Transaction hash:', hash);
        } catch (error) {
            console.error('Error calling setFees:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Set Fees</h2>
            <form onSubmit={submit}>
                <label htmlFor='addCollateralFee'>Add Collateral Fee</label>
                <input
                    type='number'
                    name='addCollateralFee'
                    value={addCollateralFee}
                    onChange={(e) => setAddCollateralFee(e.target.value)}
                />
                <label htmlFor='removeCollateralFee'>Remove Collateral Fee</label>
                <input
                    type='number'
                    name='removeCollateralFee'
                    value={removeCollateralFee}
                    onChange={(e) => setRemoveCollateralFee(e.target.value)}
                />
                <button type='submit'>Set Fees</button>
            </form>
        </div>
    );
};

export default SetFees;
