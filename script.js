// Basic MetaMask connect + Sepolia check

let currentAccount = null;

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
