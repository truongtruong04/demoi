import React, { useState } from 'react';
import { publicClient } from '../../../clients';
import { contract } from '../CollateralManagerAbi'; // Thay thế bằng tên file chứa ABI
import { useAccount } from 'wagmi'; 
import { Address } from 'viem';

const ViewLoanRequests = () => {
    const [loanRequests, setLoanRequests] = useState<Array<{ user: string; collateralAsset: string; loanAmount: number; isApproved: boolean; isRejected: boolean }>>([]);
    const account = useAccount();

    const fetchLoanRequests = async () => {
        try {
            const requests = await publicClient.readContract({
                abi: contract.abi,
                address: contract.address as Address, 
                functionName: 'viewLoanRequests',
                args: [],
            });
            setLoanRequests(requests as Array<{ user: string; collateralAsset: string; loanAmount: number; isApproved: boolean; isRejected: boolean }>);
        } catch (error) {
            console.error('Error fetching loan requests:', error);
        }
    }

    return (
        <div className="form-container">
            <h2>View Loan Requests</h2>
            <button type='button' onClick={fetchLoanRequests}>Fetch Loan Requests</button>
            <div className="loan-requests">
                {loanRequests.length > 0 ? (
                    loanRequests.map((request, index) => (
                        <div key={index} className="loan-request">
                            <h6>User: {request.user}</h6>
                            <h6>Collateral Asset: {request.collateralAsset}</h6>
                            <h6>Loan Amount: {request.loanAmount}</h6>
                            <h6>Approved: {request.isApproved ? 'Yes' : 'No'}</h6>
                            <h6>Rejected: {request.isRejected ? 'Yes' : 'No'}</h6>
                        </div>
                    ))
                ) : (
                    <h6>No loan requests found.</h6>
                )}
            </div>
        </div>
    );
};

export default ViewLoanRequests;
