import React, { useState } from 'react';
import { publicClient } from '../../../clients';
import { contract } from '../CollateralManagerAbi'; // Thay thế bằng tên file chứa ABI
import { useAccount } from 'wagmi'; 
import { Address } from 'viem';

const GetLoanRequest = () => {
    const [loanRequestId, setLoanRequestId] = useState<number | string>('');
    const [loanRequest, setLoanRequest] = useState<any>(null); 
    const account = useAccount();

    const getLoanRequest = async () => {
        if (!loanRequestId) {
            alert('Please provide a loan request ID.');
            return;
        }

        try {
            const requestResult = await publicClient.readContract({
                abi: contract.abi,
                address: contract.address as Address, 
                functionName: 'loanRequests',
                args: [Number(loanRequestId)], // Chuyển đổi loanRequestId sang số
            });

            setLoanRequest(requestResult); 
        } catch (error) {
            console.error('Error fetching loan request:', error);
        }
    }

    return (
        <div className="form-container">
            <h2>Get Loan Request</h2>
            <form onSubmit={(e) => { e.preventDefault(); getLoanRequest(); }}>
                <label htmlFor='loanRequestId'>Loan Request ID</label>
                <input
                    type='number'
                    name='loanRequestId'
                    value={loanRequestId}
                    onChange={(e) => setLoanRequestId(e.target.value)}
                />
                <button type='submit'>Get Loan Request</button>
            </form>
            {loanRequest && (
                <div className="loan-request">
                    <h6>Loan Request Details:</h6>
                    <p>User: {loanRequest.user}</p>
                    <p>Collateral Asset: {loanRequest.collateralAsset}</p>
                    <p>Loan Amount: {loanRequest.loanAmount.toString()}</p>
                    <p>Is Approved: {loanRequest.isApproved ? 'Yes' : 'No'}</p>
                    <p>Is Rejected: {loanRequest.isRejected ? 'Yes' : 'No'}</p>
                </div>
            )}
        </div>
    );
};

export default GetLoanRequest;
