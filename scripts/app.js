// scripts/app.js
// MetaMask + web3.js wiring for writable resume (initial version)

// ====== CONFIG ======
const EXPECTED_CHAIN_ID_DEC = 11155111;        // Sepolia (decimal)
const EXPECTED_CHAIN_ID_HEX = "0xaa36a7";      // Sepolia (hex)

// ====== STATE ======
let web3;
let currentAccount = null;

// ====== HELPERS ======
function $(sel) {
  return document.querySelector(sel);
}

function setText(sel, text) {
  const el = typeof sel === "string" ? $(sel) : sel;
  if (el) el.textContent = text;
}

function shortenAddress(addr) {
  if (!addr || addr.length < 10) return addr || "";
  return addr.slice(0, 6) + "…" + addr.slice(-4);
}

function show(el, visible = true) {
  if (typeof el === "string") el = $(el);
  if (!el) return;
  el.style.display = visible ? "" : "none";
}

// ====== CORE FLOW ======
async function connectWallet() {
  try {
    if (typeof window.ethereum === "undefined") {
      setText("#web3-status", "MetaMask not detected. Please install MetaMask.");
      return;
    }

    // Request accounts
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });
    if (!accounts || accounts.length === 0) {
      setText("#web3-status", "No account selected in MetaMask.");
      return;
    }

    currentAccount = accounts[0];
    // Initialize web3 from the injected provider
    web3 = new Web3(window.ethereum);

    // Display account
    setText("#web3-account", `Account: ${shortenAddress(currentAccount)}`);

    // Read chainId
    const chainIdHex = await window.ethereum.request({ method: "eth_chainId" });
    const chainIdDec = parseInt(chainIdHex, 16);
    setText("#web3-network", `Network chainId: ${chainIdHex} (${chainIdDec})`);

    // Sepolia check
    if (chainIdDec !== EXPECTED_CHAIN_ID_DEC) {
      setText("#web3-status", "Connected, but wrong network. Please switch MetaMask to Sepolia.");
      show("#wrong-network-hint", true);
    } else {
      setText("#web3-status", "Wallet connected on Sepolia ✅");
      show("#wrong-network-hint", false);
    }

    // Persist last account
    try {
      window.localStorage.setItem("lastAccount", currentAccount);
    } catch (e) {
      // ignore localStorage errors
    }

  } catch (err) {
    console.error(err);
    setText("#web3-status", `Error: ${err && err.message ? err.message : err}`);
  }
}

// Optional helper to prompt network switch (no ABI/contract yet)
async function switchToSepolia() {
  if (!window.ethereum) return;
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: EXPECTED_CHAIN_ID_HEX }]
    });
  } catch (switchError) {
    // If the chain is not added
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [{
            chainId: EXPECTED_CHAIN_ID_HEX,
            chainName: "Sepolia Test Network",
            nativeCurrency: { name: "SepoliaETH", symbol: "SEP", decimals: 18 },
            rpcUrls: ["https://rpc.sepolia.org"],
            blockExplorerUrls: ["https://sepolia.etherscan.io/"]
          }]
        });
      } catch (addError) {
        console.error(addError);
      }
    } else {
      console.error(switchError);
    }
  }
}

// ====== EVENT HANDLERS ======
function handleAccountsChanged(accounts) {
  if (!accounts || accounts.length === 0) {
    currentAccount = null;
    setText("#web3-account", "Account: (none)");
    setText("#web3-status", "Please connect your wallet.");
    return;
  }
  currentAccount = accounts[0];
  setText("#web3-account", `Account: ${shortenAddress(currentAccount)}`);
  try {
    window.localStorage.setItem("lastAccount", currentAccount);
  } catch (e) {
    // ignore
  }
}

async function handleChainChanged(_chainId) {
  // Re-run the network display + Sepolia check
  try {
    const chainIdDec = parseInt(_chainId, 16);
    setText("#web3-network", `Network chainId: ${_chainId} (${chainIdDec})`);
    if (chainIdDec !== EXPECTED_CHAIN_ID_DEC) {
      setText("#web3-status", "Connected, but wrong network. Please switch MetaMask to Sepolia.");
      show("#wrong-network-hint", true);
    } else {
      setText("#web3-status", "Wallet connected on Sepolia ✅");
      show("#wrong-network-hint", false);
    }
  } catch (e) {
    console.error(e);
  }
}

// ====== UI WIRING ======
function bind() {
  const connectBtn = document.getElementById("connect-btn");
  if (connectBtn) {
    connectBtn.addEventListener("click", connectWallet);
  }

  const switchBtn = document.getElementById("switch-network-btn");
  if (switchBtn) {
    switchBtn.addEventListener("click", switchToSepolia);
  }

  // Attach MetaMask listeners if available
  if (window.ethereum) {
    window.ethereum.on?.("accountsChanged", handleAccountsChanged);
    window.ethereum.on?.("chainChanged", handleChainChanged);
  }

  // Optional: show lastAccount from localStorage
  try {
    const last = window.localStorage.getItem("lastAccount");
    if (last) {
      setText("#web3-account", `Last account: ${shortenAddress(last)}`);
    }
  } catch (e) {
    // ignore
  }
}

document.addEventListener("DOMContentLoaded", bind);


