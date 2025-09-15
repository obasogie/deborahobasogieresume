// Writable Résumé — Web3.js client with FULL ABI inline
// - Uses MetaMask (Sepolia) when available; read-only RPC fallback
// - Exposes helpers for reads/writes matching the contract method signatures

const CONTRACT_ADDRESS = "0x30A837e5E93f21d30BE81cC808B0223d37EcE038"; // Sepolia
const SEPOLIA_CHAIN_ID_HEX = "0xaa36a7"; // 11155111

let web3;
let contract;
let selectedAccount;

// ---- FULL ABI (includes owner() and meta()) ----
const CONTRACT_ABI = [
  {"inputs":[],"stateMutability":"nonpayable","type":"constructor"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"item","type":"string"}],"name":"addContactItem","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"item","type":"string"}],"name":"addEducationItem","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"item","type":"string"}],"name":"addProficiencyItem","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"item","type":"string"}],"name":"addTrainingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"item","type":"string"}],"name":"addWorkHistoryItem","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"item","type":"string"}],"name":"addProfessionalExperienceItem","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"section","type":"uint256"}],"name":"clearContact","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"section","type":"uint256"}],"name":"clearEducation","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"section","type":"uint256"}],"name":"clearProficiencies","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"section","type":"uint256"}],"name":"clearTraining","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"section","type":"uint256"}],"name":"clearWorkHistory","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"section","type":"uint256"}],"name":"clearProfessionalExperience","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"meta","outputs":[
      {"internalType":"address","name":"owner","type":"address"},
      {"internalType":"string","name":"uiURL","type":"string"},
      {"internalType":"string","name":"version","type":"string"},
      {"internalType":"uint256","name":"deployedAt","type":"uint256"}
  ],"stateMutability":"view","type":"function"}
];

// ---- Wallet connection with Sepolia chain guard ----
async function connectWallet() {
  if (!window.ethereum) throw new Error("MetaMask not found");
  web3 = new Web3(window.ethereum);
  const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  selectedAccount = accounts[0];

  const currentChainId = await window.ethereum.request({ method: "eth_chainId" });
  if (currentChainId !== SEPOLIA_CHAIN_ID_HEX) {
    throw new Error(`Wrong network: expected Sepolia (${SEPOLIA_CHAIN_ID_HEX}), got ${currentChainId}`);
  }

  contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
  return selectedAccount;
}

// ---- Helpers for calls and sends ----
async function call(method, ...args) {
  if (!contract) throw new Error("Contract not initialized");
  return await contract.methods[method](...args).call();
}

async function send(method, ...args) {
  if (!contract || !selectedAccount) throw new Error("Wallet not connected");
  return await contract.methods[method](...args).send({ from: selectedAccount });
}

// ---- Owner guard ----
async function isOwner() {
  if (!contract || !selectedAccount) return false;
  const ownerAddr = await contract.methods.owner().call();
  return ownerAddr.toLowerCase() === selectedAccount.toLowerCase();
}

// ---- Meta helper ----
async function getMeta() {
  if (!contract) throw new Error("Contract not initialized");
  return await contract.methods.meta().call();
}

// ---- Expose to window ----
window.Resume = {
  connectWallet,
  call,
  send,
  isOwner,
  getMeta
};
