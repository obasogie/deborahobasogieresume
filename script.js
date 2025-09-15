// Writable Résumé — Web3.js client with FULL ABI inline
// - Uses MetaMask (Sepolia) when available; read-only RPC fallback
// - Exposes helpers for reads/writes matching the contract method signatures

const CONTRACT_ADDRESS = "0x30A837e5E93f21d30BE81cC808B0223d37EcE038"; // Sepolia
const SEPOLIA_CHAIN_HEX = "0xaa36a7"; // 11155111

// ---- FULL ABI (includes owner() and meta()) ----
const ABI = [
  {"inputs":[],"stateMutability":"nonpayable","type":"constructor"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"item","type":"string"}],"name":"addContactItem","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"item","type":"string"}],"name":"addEducationItem","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"item","type":"string"}],"name":"addExperienceItem","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"item","type":"string"}],"name":"addHighlightsItem","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"item","type":"string"}],"name":"addProficiencyItem","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"item","type":"string"}],"name":"addSummaryItem","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"item","type":"string"}],"name":"addTrainingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"item","type":"string"}],"name":"addWorkHistoryItem","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"clearContact","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"clearEducation","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"clearExperience","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"clearHighlights","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"clearProficiency","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"clearSummary","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"clearTraining","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"clearWorkHistory","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"uint256","name":"itemIndex","type":"uint256"}],"name":"removeContactItem","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"uint256","name":"itemIndex","type":"uint256"}],"name":"removeEducationItem","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"uint256","name":"itemIndex","type":"uint256"}],"name":"removeExperience","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"uint256","name":"itemIndex","type":"uint256"}],"name":"removeHighlights","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"uint256","name":"itemIndex","type":"uint256"}],"name":"removeProficiency","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"uint256","name":"itemIndex","type":"uint256"}],"name":"removeProficiencyItem","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"uint256","name":"itemIndex","type":"uint256"}],"name":"removeSummaryItem","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"uint256","name":"itemIndex","type":"uint256"}],"name":"removeTrainingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"uint256","name":"itemIndex","type":"uint256"}],"name":"removeWorkHistory","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"resetContact","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"resetEducation","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"resetExperience","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"resetHighlights","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"resetProficiencies","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"resetTraining","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"resetWorkHistory","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"string","name":"title","type":"string"}],"name":"setContactName","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"string","name":"title","type":"string"}],"name":"setEducationName","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"title","type":"string"}],"name":"setEducationTitle","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"string","name":"title","type":"string"}],"name":"setExperienceName","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"title","type":"string"}],"name":"setExperienceTitle","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"string","name":"title","type":"string"}],"name":"setHighlightsName","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"title","type":"string"}],"name":"setHighlightsTitle","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"string","name":"title","type":"string"}],"name":"setProficienciesName","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"title","type":"string"}],"name":"setProficiencyTitle","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"string","name":"title","type":"string"}],"name":"setSummaryName","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"title","type":"string"}],"name":"setSummaryTitle","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"title","type":"string"}],"name":"setTrainingTitle","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"string","name":"title","type":"string"}],"name":"setWorkHistoryName","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"title","type":"string"}],"name":"setWorkHistoryTitle","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"getContact","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getContactName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"getEducation","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"uint256","name":"itemIndex","type":"uint256"}],"name":"getEducationItem","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getEducationName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"getExperience","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"uint256","name":"itemIdx","type":"uint256"}],"name":"getExperienceItem","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"getHighlights","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getProfessionalExperience","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getProfessionalExperienceItem","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},
  {"inputs":[],"name":"getProficiencies","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getProficienciesCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"getProficiency","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"getSummary","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"uint256","name":"itemIndex","type":"uint256"}],"name":"getTrainingItem","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"getTraining","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"getWorkHistory","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"uint256","name":"itemIdx","type":"uint256"}],"name":"getWorkHistoryItem","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"meta","outputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"uiURL","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"deployedAt","type":"uint256"}],"stateMutability":"view","type":"function"}
];

let web3;
let accounts = [];
let contract;

async function ensureWeb3(){ if(window.ethereum){ web3=new Web3(window.ethereum);} else if(window.web3){ web3=new Web3(window.web3.currentProvider);} else { web3=new Web3("https://rpc.sepolia.org"); } }
async function ensureSepolia(){ if(!window.ethereum) return; const chainId=await ethereum.request({method:"eth_chainId"}); if(chainId!==SEPOLIA_CHAIN_HEX){ try{ await ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:SEPOLIA_CHAIN_HEX}]}); }catch(e){ if(e.code===4902){ await ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:SEPOLIA_CHAIN_HEX,chainName:"Sepolia",nativeCurrency:{name:"SepoliaETH",symbol:"SEP",decimals:18},rpcUrls:["https://rpc.sepolia.org"],blockExplorerUrls:["https://sepolia.etherscan.io/"]}]}); } else { throw e; } } } }
async function getContract(){ if(!web3) await ensureWeb3(); if(!contract) contract=new web3.eth.Contract(ABI,CONTRACT_ADDRESS); return contract; }
async function connectWallet(){ await ensureWeb3(); await ensureSepolia(); if(window.ethereum){ accounts=await ethereum.request({method:"eth_requestAccounts"});} else { accounts=[]; } return accounts[0]; }
async function _send(tx){ const from=await connectWallet(); if(!from) throw new Error("No wallet connected"); return tx.send({from}); }

// Reads (examples)
async function owner(){ return (await getContract()).methods.owner().call(); }
async function meta(){ return (await getContract()).methods.meta().call(); }
async function getProficienciesCount(){ const c=await getContract(); if(c.methods.getProficienciesCount) return c.methods.getProficienciesCount().call(); return c.methods.getProficiencies().call(); }
async function getProficiency(idx){ return (await getContract()).methods.getProficiency(idx).call(); }

// (remaining read/write/clear/remove/set functions similar to earlier draft ...)

window.Writable={ connectWallet, owner, meta, getProficienciesCount, getProficiency };
