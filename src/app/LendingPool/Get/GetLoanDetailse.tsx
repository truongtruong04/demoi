import React, { useState } from 'react';
import { publicClient } from '../../../clients';
import { contract } from '../LendingPoolAbi'; // Thay thế bằng ABI của bạn
import { useAccount } from 'wagmi';
import { Address } from 'viem';

const GetLoanDetailse = () => {
    const [userAddress, setUserAddress] = useState<string>('');
    const [loanDetails, setLoanDetails] = useState<any | null>(null);
    const account = useAccount();

    const getLoanDetails = async () => {
        if (!userAddress) {
            alert('Please provide a user address.');
            return;
        }

        try {
            const loanResult = await publicClient.readContract({
                abi: contract.abi,
                address: contract.address as Address, 
                functionName: 'loans',
                args: [userAddress],
            });
            setLoanDetails(loanResult); 
        } catch (error) {
            console.error('Error fetching loan details:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Get Loan Details</h2>
            <input
                type='text'
                placeholder='Enter User Address'
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
            />
            <button type='button' onClick={getLoanDetails}>Get Loan Details</button>
            <div className="loan-details">
                {loanDetails && (
                    <div>
                        <h6>User: {loanDetails.user}</h6>
                        <h6>Loan Amount: {loanDetails.loanAmount.toString()}</h6>
                        <h6>Interest Rate: {loanDetails.interestRate.toString()}</h6>
                        <h6>Repayment Period: {loanDetails.repaymentPeriod.toString()}</h6>
                        <h6>Collateral Address: {loanDetails.collateral.assetAddress}</h6>
                        <h6>Collateral Amount: {loanDetails.collateral.amount.toString()}</h6>
                        <h6>Start Time: {loanDetails.startTime.toString()}</h6>
                        <h6>Is Approved: {loanDetails.isApproved ? 'Yes' : 'No'}</h6>
                        <h6>Is Rejected: {loanDetails.isRejected ? 'Yes' : 'No'}</h6>
                        <h6>Due Time: {loanDetails.dueTime.toString()}</h6>
                        <h6>Liquidation Threshold: {loanDetails.liquidationThreshold.toString()}</h6>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GetLoanDetailse;
