"use client";
import React, { useState } from 'react';
import { publicClient } from '../../../clients';
import { contract } from '../LendingPoolAbi';
import { useAccount } from 'wagmi'; 
import { Address } from 'viem';

const GetLoanDetails = () => {
    const [userAddress, setUserAddress] = useState<string>('');
    const [loanDetails, setLoanDetails] = useState<any | null>(null); 
    const account = useAccount();

    const getLoanDetails = async () => {
        if (!userAddress) {
            alert('Please provide a user address.');
            return;
        }

        try {
            const detailsResult = await publicClient.readContract({
                abi: contract.abi,
                address: contract.address as Address,
                functionName: 'getLoanDetails',
                args: [userAddress],
            }) as [
                string,  // loanAmount
                string,  // interestRate
                string,  // repaymentPeriod
                string,  // collateralAsset
                string,  // collateralAmount
                string,  // startTime
                boolean, // isApproved
                boolean  // isRejected
            ];

            // Chuyển đổi giá trị thành đối tượng chi tiết khoản vay
            setLoanDetails({
                loanAmount: detailsResult[0],
                interestRate: detailsResult[1],
                repaymentPeriod: detailsResult[2],
                collateralAsset: detailsResult[3],
                collateralAmount: detailsResult[4],
                startTime: detailsResult[5],
                isApproved: detailsResult[6],
                isRejected: detailsResult[7],
            });
        } catch (error) {
            console.error('Error fetching loan details:', error);
            setLoanDetails(null); // Đặt lại giá trị khi có lỗi
        }
    };

    return (
        <div className="form-container">
            <h2>Get Loan Details</h2>
            <input
                type='text'
                placeholder='Enter user address'
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
            />
            <button type='button' onClick={getLoanDetails}>Get Loan Details</button>
            <div className="loan-details">
                <h6>Loan Details:</h6>
                {loanDetails ? (
                    <ul>
                        <li>Loan Amount: {loanDetails.loanAmount}</li>
                        <li>Interest Rate: {loanDetails.interestRate}</li>
                        <li>Repayment Period: {loanDetails.repaymentPeriod}</li>
                        <li>Collateral Asset: {loanDetails.collateralAsset}</li>
                        <li>Collateral Amount: {loanDetails.collateralAmount}</li>
                        <li>Start Time: {new Date(Number(loanDetails.startTime) * 1000).toLocaleString()}</li>
                        <li>Approved: {loanDetails.isApproved ? 'Yes' : 'No'}</li>
                        <li>Rejected: {loanDetails.isRejected ? 'Yes' : 'No'}</li>
                    </ul>
                ) : (
                    <p>N/A</p>
                )}
            </div>
        </div>
    );
};

export default GetLoanDetails;
