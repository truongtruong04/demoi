export const contract = {
  abi: [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "interestRate",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "repaymentPeriod",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "collateralAsset",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "collateralAmount",
          type: "uint256",
        },
      ],
      name: "Borrow",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newAddress",
          type: "address",
        },
      ],
      name: "ContractAddressesUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "asset",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Deposit",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "asset",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Liquidate",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "LoanApproved",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "LoanRejected",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "interestRate",
          type: "uint256",
        },
      ],
      name: "LoanTransfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "interestRate",
          type: "uint256",
        },
      ],
      name: "Repay",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "newServiceFee",
          type: "uint256",
        },
      ],
      name: "ServiceFeeSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "asset",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Withdraw",
      type: "event",
    },
    {
      inputs: [],
      name: "GassFee",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "admin",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
 {
      inputs: [{ internalType: "address", name: "user", type: "address" }],
      name: "approvedLoan",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "loanAmount", type: "uint256" },
        { internalType: "uint256", name: "interestRate", type: "uint256" },
        { internalType: "uint256", name: "startTime", type: "uint256" },
      ],
      name: "calculateInterest",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "collateralManagerAddress",
      outputs: [
        {
          internalType: "contract ICollateralManager",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "asset", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "deposit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "getAllReservesTokens",
      outputs: [
        {
          components: [
            { internalType: "string", name: "symbol", type: "string" },
            { internalType: "address", name: "assetAddress", type: "address" },
          ],
          internalType: "struct LendingPool.TokenData[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "assetAddress", type: "address" },
      ],
      name: "getAssetPrice",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "user", type: "address" }],
      name: "getCollateralDetails",
      outputs: [
        {
          components: [
            { internalType: "address", name: "assetAddress", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          internalType: "struct LendingPool.Collateral[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "user", type: "address" }],
      name: "getLoanDetails",
      outputs: [
        { internalType: "uint256", name: "loanAmount", type: "uint256" },
        { internalType: "uint256", name: "interestRate", type: "uint256" },
        { internalType: "uint256", name: "repaymentPeriod", type: "uint256" },
        { internalType: "address", name: "collateralAsset", type: "address" },
        { internalType: "uint256", name: "collateralAmount", type: "uint256" },
        { internalType: "uint256", name: "startTime", type: "uint256" },
        { internalType: "bool", name: "isApproved", type: "bool" },
        { internalType: "bool", name: "isRejected", type: "bool" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_token", type: "address" }],
      name: "getValidCollateralStatus",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "user", type: "address" }],
      name: "liquidate",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "loans",
      outputs: [
        { internalType: "address", name: "user", type: "address" },
        { internalType: "uint256", name: "loanAmount", type: "uint256" },
        { internalType: "uint256", name: "interestRate", type: "uint256" },
        { internalType: "uint256", name: "repaymentPeriod", type: "uint256" },
        {
          components: [
            { internalType: "address", name: "assetAddress", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          internalType: "struct LendingPool.Collateral",
          name: "collateral",
          type: "tuple",
        },
        { internalType: "uint256", name: "startTime", type: "uint256" },
        { internalType: "bool", name: "isApproved", type: "bool" },
        { internalType: "bool", name: "isRejected", type: "bool" },
        { internalType: "uint256", name: "dueTime", type: "uint256" },
        {
          internalType: "uint256",
          name: "liquidationThreshold",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "priceOracleAddress",
      outputs: [
        { internalType: "contract IPriceOracle", name: "", type: "address" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "user", type: "address" }],
      name: "rejectLoan",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
      name: "repay",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "amount", type: "uint256" },
        { internalType: "uint256", name: "interestRate", type: "uint256" },
        { internalType: "uint256", name: "repaymentPeriod", type: "uint256" },
        { internalType: "address", name: "collateralAsset", type: "address" },
        { internalType: "uint256", name: "collateralAmount", type: "uint256" },
      ],
      name: "requestLoan",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "reserveTokens",
      outputs: [
        { internalType: "string", name: "symbol", type: "string" },
        { internalType: "address", name: "assetAddress", type: "address" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_collateralManagerAddress",
          type: "address",
        },
      ],
      name: "setCollateralManager",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_GassFee", type: "uint256" }],
      name: "setGassFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "_mockTokenAddress", type: "address" },
      ],
      name: "setMockTokenAddress",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_priceOracleAddress",
          type: "address",
        },
      ],
      name: "setPriceOracle",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_token", type: "address" }],
      name: "setToken",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "token",
      outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "asset", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  address: "0xF7BafBB5c6Ac0D0165Ec2eAE6BabeB4e59Bc0584",
};
