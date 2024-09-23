import React, { useState } from 'react';
import { publicClient } from '../../../clients';
import { contract } from '../LendingPoolAbi'; // Thay đổi đường dẫn đúng với ABI của bạn
import { useAccount } from 'wagmi'; 
import { Address } from 'viem';

const CalculateInterest = () => {
    const [loanAmount, setLoanAmount] = useState<string>('');
    const [interestRate, setInterestRate] = useState<string>('');
    const [startTime, setStartTime] = useState<string>('');
    const [calculatedInterest, setCalculatedInterest] = useState<string | null>(null);
    const account = useAccount();

    const calculate = async () => {
        if (!loanAmount || !interestRate || !startTime) {
            alert('Please provide loan amount, interest rate, and start time.');
            return;
        }

        try {
            const interestResult = await publicClient.readContract({
                abi: contract.abi,
                address: contract.address as Address, 
                functionName: 'calculateInterest',
                args: [loanAmount, interestRate, startTime],
            }) as unknown as BigInt; // Ép kiểu về BigInt hoặc kiểu bạn mong muốn

            setCalculatedInterest(interestResult.toString()); 
        } catch (error) {
            console.error('Error calculating interest:', error);
        }
    }

    return (
        <div className="form-container">
            <h2>Calculate Interest</h2>
            <label htmlFor='loanAmount'>Loan Amount</label>
            <input
                type='text'
                name='loanAmount'
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
            />
            <label htmlFor='interestRate'>Interest Rate</label>
            <input
                type='text'
                name='interestRate'
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
            />
            <label htmlFor='startTime'>Start Time</label>
            <input
                type='text'
                name='startTime'
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
            />
            <button type='button' onClick={calculate}>Calculate Interest</button>
            <div className="interest-result">
                <h6>Calculated Interest: {calculatedInterest !== null ? calculatedInterest : 'N/A'}</h6>
            </div>
        </div>
    );
};

export default CalculateInterest;
