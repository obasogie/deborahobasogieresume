// Basic MetaMask connect + Sepolia check

let currentAccount = null;

// ---- Contract wiring for console-only reads ----
const CONTRACT_ADDRESS = "0x30A837e5E93f21d30BE81cC808B0223d37EcE038"; // Sepolia addbcResume
const CONTRACT_ABI = /* copy the ABI array from scripts/config.js or your contract file */ 
  [
    {
      "inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "item",
				"type": "string"
			}
		],
		"name": "addContactItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "item",
				"type": "string"
			}
		],
		"name": "addEducationItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "item",
				"type": "string"
			}
		],
		"name": "addExperienceItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "item",
				"type": "string"
			}
		],
		"name": "addHighlightsItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "item",
				"type": "string"
			}
		],
		"name": "addProficiencyItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "item",
				"type": "string"
			}
		],
		"name": "addSummaryItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "item",
				"type": "string"
			}
		],
		"name": "addTrainingItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "item",
				"type": "string"
			}
		],
		"name": "addWorkHistoryItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "clearContact",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "clearEducation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "clearExperience",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "clearHighlights",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "clearProficiency",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "clearSummary",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "clearTraining",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "clearWorkHistory",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "itemIndex",
				"type": "uint256"
			}
		],
		"name": "removeContactItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "itemIndex",
				"type": "uint256"
			}
		],
		"name": "removeEducationItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "itemIndex",
				"type": "uint256"
			}
		],
		"name": "removeExperience",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "itemIndex",
				"type": "uint256"
			}
		],
		"name": "removeHighlights",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "itemIndex",
				"type": "uint256"
			}
		],
		"name": "removeProficiency",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "itemIndex",
				"type": "uint256"
			}
		],
		"name": "removeProficiencyItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "itemIndex",
				"type": "uint256"
			}
		],
		"name": "removeSummaryItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "itemIndex",
				"type": "uint256"
			}
		],
		"name": "removeTrainingItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "itemIndex",
				"type": "uint256"
			}
		],
		"name": "removeWorkHistory",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "resetContact",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "resetEducation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "resetExperience",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "resetHighlights",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "resetProficiencies",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "resetTraining",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "resetWorkHistory",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "setContactName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "setEducationName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "setEducationTitle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "setExperienceName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "setExperienceTitle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "setHighlightsName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "setHighlightsTitle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "setProficienciesName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "setProficiencyTitle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "setSummaryName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "setSummaryTitle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "setTrainingTitle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "setWorkHistoryName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "setWorkHistoryTitle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "getContact",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContactName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "getEducation",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "itemIndex",
				"type": "uint256"
			}
		],
		"name": "getEducationItem",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getEducationName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "getExperience",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "itemIdx",
				"type": "uint256"
			}
		],
		"name": "getExperienceItem",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "getHighlights",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProfessionalExperience",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProfessionalExperienceItem",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProficiencies",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProficienciesCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "getProficiency",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "getSummary",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "getTraining",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "itemIndex",
				"type": "uint256"
			}
		],
		"name": "getTrainingItem",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "getWorkHistory",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "itemIdx",
				"type": "uint256"
			}
		],
		"name": "getWorkHistoryItem",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}];

let web3;
let contract;

// Initialize web3/contract after MetaMask connect
async function initContract() {
  if (!window.ethereum) throw new Error("MetaMask not found");

  if (!web3) {
    web3 = new Web3(window.ethereum);
  }
  if (!contract) {
    contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
  }
}

// Generic call helper for console use
async function resumeCall(method, ...args) {
  if (!contract) {
    await initContract();
  }
  return await contract.methods[method](...args).call();
}

// Expose for console
window.Resume = {
  resumeCall
};


function shorten(addr) {
  return addr ? addr.slice(0, 6) + "..." + addr.slice(-4) : "";
}

async function connectWallet() {
  const statusEl = document.getElementById("web3-status");
  const acctEl = document.getElementById("web3-account");
  const netEl = document.getElementById("web3-network");
  const hintEl = document.getElementById("wrong-network-hint");

  if (!window.ethereum) {
    statusEl.textContent = "MetaMask not detected.";
    return;
  }

  try {
    statusEl.textContent = "Connecting…";
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    if (!accounts || !accounts.length) {
      statusEl.textContent = "No account connected.";
      return;
    }

    currentAccount = accounts[0];
    acctEl.textContent = `Account: ${shorten(currentAccount)}`;

    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    netEl.textContent = `Network chainId: ${chainId}`;

    const onSepolia = chainId === "0xaa36a7"; // 11155111
    if (!onSepolia) {
      statusEl.textContent = "Connected, but wrong network.";
      hintEl.style.display = "block";
    } else {
      statusEl.textContent = "Connected on Sepolia.";
      hintEl.style.display = "none";
    }
  } catch (err) {
    console.error("Connect error:", err);
    statusEl.textContent = "Error connecting to MetaMask.";
  }
}

async function switchToSepolia() {
  if (!window.ethereum) return;
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0xaa36a7" }],
    });
  } catch (err) {
    console.error("Switch network error:", err);
  }
}

// Wire up buttons once DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  const connectBtn = document.getElementById("connect-btn");
  const switchBtn = document.getElementById("switch-network-btn");

  if (connectBtn) connectBtn.addEventListener("click", connectWallet);
  if (switchBtn) switchBtn.addEventListener("click", switchToSepolia);

  if (window.ethereum) {
    window.ethereum.on("accountsChanged", () => connectWallet());
    window.ethereum.on("chainChanged", () => window.location.reload());
  }
});
