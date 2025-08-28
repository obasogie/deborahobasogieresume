// app.js — addbcResume UI starter (Sepolia, MetaMask, ethers v6)
// Note: Replace CONTRACT_ADDRESS and ABI before using write functions.
import { BrowserProvider, Contract } from "https://cdn.jsdelivr.net/npm/ethers@6.13.1/dist/ethers.min.js";

// ====== CONFIG ======
export const EXPECTED_CHAIN_ID = 11155111; // Sepolia
export let CONTRACT_ADDRESS = "0xYourAddBcResumeAddressHere"; // TODO: replace after deploy
export let ABI = [
  // TODO: Paste the ABI of addbcResume here.
  // Example (read-only): { "type":"function","name":"meta","stateMutability":"view","inputs":[],"outputs":[{"type":"string"}] }
];

// ====== STATE ======
let provider;
let signer;
let contract;

// ====== HELPERS ======
function $(sel) { return document.querySelector(sel); }
function setText(sel, text) { const el = $(sel); if (el) el.textContent = text; }
function show(el, visible=true){ if(typeof el==="string") el=$(el); if(el) el.style.display = visible ? "" : "none"; }

// ====== METAMASK / PROVIDER ======
export async function connectWallet() {
  try {
    if (!window.ethereum) {
      setText("#web3-status", "MetaMask not found. Please install MetaMask.");
      return;
    }
    const providerObj = new BrowserProvider(window.ethereum);
    provider = providerObj;
    await provider.send("eth_requestAccounts", []);
    const network = await provider.getNetwork();
    setText("#web3-network", `Network: ${network.name} (chainId ${Number(network.chainId)})`);

    if (Number(network.chainId) !== EXPECTED_CHAIN_ID) {
      setText("#web3-status", "Wrong network – please switch MetaMask to Sepolia.");
      show("#wrong-network-hint", true);
      return;
    }

    signer = await provider.getSigner();
    const addr = await signer.getAddress();
    setText("#web3-account", `Account: ${addr}`);
    setText("#web3-status", "Wallet connected ✅");
    show("#wrong-network-hint", false);

    if (CONTRACT_ADDRESS && ABI && ABI.length) {
      contract = new Contract(CONTRACT_ADDRESS, ABI, signer);
      await loadContractMeta();
    } else {
      setText("#contract-status", "ABI/address not set yet. Paste your ABI & address in app.js.");
    }

    // Listen for chain/account changes
    window.ethereum.on?.("chainChanged", () => window.location.reload());
    window.ethereum.on?.("accountsChanged", () => window.location.reload());
  } catch (err) {
    console.error(err);
    setText("#web3-status", `Error: ${err.message || err}`);
  }
}

// ====== SAMPLE READ (meta) ======
export async function loadContractMeta(){
  try {
    if (!contract?.meta) {
      setText("#contract-status", "meta() not found in ABI. Add it or remove this panel.");
      return;
    }
    setText("#contract-status", "Reading meta()…");
    const value = await contract.meta();
    setText("#contract-meta", value || "(empty)");
    setText("#contract-status", "meta() loaded ✅");
  } catch (err) {
    console.error(err);
    setText("#contract-status", `meta() error: ${err.message || err}`);
  }
}

// ====== OPTIONAL: NETWORK SWITCH ======
export async function switchToSepolia(){
  if (!window.ethereum) return;
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0xaa36a7" }], // 11155111 in hex
    });
  } catch (switchError) {
    // If the chain hasn't been added to MetaMask, request to add it
    if (switchError.code === 4902) {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [{
          chainId: "0xaa36a7",
          chainName: "Sepolia Test Network",
          nativeCurrency: { name: "SepoliaETH", symbol: "SEP", decimals: 18 },
          rpcUrls: ["https://rpc.sepolia.org"],
          blockExplorerUrls: ["https://sepolia.etherscan.io/"],
        }],
      });
    } else {
      console.error(switchError);
    }
  }
}

// ====== UI WIRING ======
function bind(){
  const connectBtn = $("#connect-btn");
  connectBtn?.addEventListener("click", connectWallet);

  const switchBtn = document.querySelector("#switch-network-btn");
  switchBtn?.addEventListener("click", switchToSepolia);
}

document.addEventListener("DOMContentLoaded", bind);
