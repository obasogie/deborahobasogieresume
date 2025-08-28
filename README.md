# addbcResume Web3 Panel (for deborahobasogieresume)

This patch adds a small Web3 panel to your existing résumé page so you can connect MetaMask, check the Sepolia network, and read `meta()` from **addbcResume** once deployed.

## Files
- `index.html` — your current page with the panel inserted just under the header (or body if no header).
- `style.css` — unchanged from your uploaded version.
- `app.js` — Ethers v6 helper to connect and read `meta()`.

## Setup
1. Paste your deployed **addbcResume** contract address into `app.js`:
   ```js
   export let CONTRACT_ADDRESS = "0x...";
   ```
2. Paste the full **ABI** into `app.js` (include the `meta()` function if you want the sample read to work).
3. Commit & push to `main`, then open your GitHub Pages site.
4. Click **Connect Wallet**. If you’re not on Sepolia, use **Switch to Sepolia**.
