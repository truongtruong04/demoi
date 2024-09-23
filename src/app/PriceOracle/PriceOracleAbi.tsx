export const contract = {
  abi: [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "assetAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "price",
          type: "uint256",
        },
      ],
      name: "AssetPriceUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "assetAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "threshold",
          type: "uint256",
        },
      ],
      name: "LiquidationThresholdUpdated",
      type: "event",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "assetPrices",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
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
      inputs: [
        { internalType: "address", name: "assetAddress", type: "address" },
      ],
      name: "getLiquidationThreshold",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "liquidationThresholds",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "assetAddress", type: "address" },
        { internalType: "uint256", name: "percentage", type: "uint256" },
      ],
      name: "setDefaultLiquidationThreshold",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "assetAddress", type: "address" },
        { internalType: "uint256", name: "initialPrice", type: "uint256" },
      ],
      name: "setInitialAssetPrice",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "assetAddress", type: "address" },
        { internalType: "uint256", name: "price", type: "uint256" },
      ],
      name: "updateAssetPrice",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "assetAddress", type: "address" },
        { internalType: "uint256", name: "threshold", type: "uint256" },
      ],
      name: "updateLiquidationThreshold",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  address: "0x76ef7B51918D5D43D0e349b33E8F9B0C755A5719",
};
