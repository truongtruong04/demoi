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
          internalType: "address",
          name: "assetAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "CollateralAdded",
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
          internalType: "address",
          name: "assetAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "CollateralLocked",
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
          internalType: "address",
          name: "assetAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "CollateralRemoved",
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
          internalType: "address",
          name: "assetAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "CollateralUnlocked",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "priceOracle",
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
          indexed: false,
          internalType: "uint256",
          name: "addCollateralFee",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "removeCollateralFee",
          type: "uint256",
        },
      ],
      name: "FeesUpdated",
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
          internalType: "address",
          name: "collateralAsset",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "loanAmount",
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
          internalType: "address",
          name: "collateralAsset",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "loanAmount",
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
          internalType: "address",
          name: "collateralAsset",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "loanAmount",
          type: "uint256",
        },
      ],
      name: "LoanRequested",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "token",
          type: "address",
        },
        { indexed: false, internalType: "bool", name: "isValid", type: "bool" },
      ],
      name: "ValidCollateralTokenUpdated",
      type: "event",
    },
    {
      inputs: [
        { internalType: "address", name: "assetAddress", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "addCollateral",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "addCollateralFee",
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
      inputs: [{ internalType: "uint256", name: "requestId", type: "uint256" }],
      name: "approveLoan",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "address", name: "", type: "address" },
      ],
      name: "collateralAssets",
      outputs: [
        { internalType: "uint256", name: "amount", type: "uint256" },
        { internalType: "bool", name: "isLocked", type: "bool" },
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
      inputs: [{ internalType: "address", name: "token", type: "address" }],
      name: "getValidCollateralStatus",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "loanRequests",
      outputs: [
        { internalType: "address", name: "user", type: "address" },
        { internalType: "address", name: "collateralAsset", type: "address" },
        { internalType: "uint256", name: "loanAmount", type: "uint256" },
        { internalType: "bool", name: "isApproved", type: "bool" },
        { internalType: "bool", name: "isRejected", type: "bool" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "user", type: "address" },
        { internalType: "address", name: "assetAddress", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "lockCollateral",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "priceOracle",
      outputs: [
        { internalType: "contract IPriceOracle", name: "", type: "address" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "requestId", type: "uint256" }],
      name: "rejectLoan",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "assetAddress", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "removeCollateral",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "removeCollateralFee",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "collateralAsset", type: "address" },
        { internalType: "uint256", name: "loanAmount", type: "uint256" },
      ],
      name: "requestLoan",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "_priceOracle", type: "address" },
      ],
      name: "setContractAddress",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_addCollateralFee", type: "uint256" },
        {
          internalType: "uint256",
          name: "_removeCollateralFee",
          type: "uint256",
        },
      ],
      name: "setFees",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "token", type: "address" },
        { internalType: "bool", name: "isValid", type: "bool" },
      ],
      name: "setValidCollateral",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "user", type: "address" },
        { internalType: "address", name: "assetAddress", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "unlockCollateral",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address[]", name: "tokens", type: "address[]" },
        { internalType: "bool[]", name: "status", type: "bool[]" },
      ],
      name: "updateValidCollateralTokens",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "validCollateralTokens",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "viewLoanRequests",
      outputs: [
        {
          components: [
            { internalType: "address", name: "user", type: "address" },
            {
              internalType: "address",
              name: "collateralAsset",
              type: "address",
            },
            { internalType: "uint256", name: "loanAmount", type: "uint256" },
            { internalType: "bool", name: "isApproved", type: "bool" },
            { internalType: "bool", name: "isRejected", type: "bool" },
          ],
          internalType: "struct CollateralManager.LoanRequest[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  address: "0x09c0B874071539b7851a59B1e39B411d4Ea71868",
};
