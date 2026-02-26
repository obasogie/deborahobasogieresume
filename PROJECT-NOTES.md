# 📘 Project Documentation Summary

**Project:** Blockchain-Connected Updatable Resume — UI on GitHub Pages, backend on Sepolia testnet.

--

A decentralized professional resume project with a static HTML/CSS/JavaScript front end hosted on GitHub Pages, and a Solidity smart contract backend planned for deployment on the Ethereum Sepolia testnet.  
The updatable resume includes verified credential links and permanent storage on IPFS, with a requirement to be accessible via deborahobasogieresume/.

---

## 🔗 Live Links
- **GitHub Pages:** [https://obasogie.github.io/deborahobasogieresume](https://obasogie.github.io/deborahobasogieresume/)
- **IPFS Permanent Link:** [https://ipfs.io/ipfs/bafybeia6iruroovasdqntvdmvcckvmeu2i4corlfmedu4b5fmhndlz7o5i/](https://ipfs.io/ipfs/bafybeia6iruroovasdqntvdmvcckvmeu2i4corlfmedu4b5fmhndlz7o5i/)

---
## 🖥️ Front End
- HTML/CSS resume UI with responsive dual-column layout
- Verified credential links
- Hosted on GitHub Pages
- Version-controlled on GitHub

---

## 🔗 Back End
- Solidity smart contract `addbcResume.sol` created and committed
- Sections - Updatable: Contact Info, Proficiencies, Recent Training, Professional Experience, Education, Work History, Summary & Highlights
- Deployment on Sepolia testnet via Remix

---


## 🖥️ Project Features
- **Responsive, dual-column HTML/CSS layout** — clear, structured, accessible across devices
- **JavaScript-enhanced footer** — integrates Ethereum smart contract deployment date
- **Smart contract integration** — resume will be verified on the Ethereum Sepolia testnet
- **IPFS integration** — full resume folder pinned to the InterPlanetary File System for permanent, decentralized storage

---

## 🛠️ Technologies Used
- HTML5, CSS3, JavaScript
- Solidity smart contracts
- Ethereum Sepolia testnet
- IPFS (via Pinata & Gateway)
- GitHub Pages for hosting
- Replit & Remix IDE or preview and testing
- MetaMask
- web3

---

## 📌 Repository File Overview
- `index.html` — main resume page
- `style.css` — site styling
- `web3.min.js` — local Web3 library for blockchain interaction (replaces CDN)
- `contract/bcResume.sol` — Solidity smart contract source code
- `PROJECT-NOTES.md` — detailed project documentation and development log
- `PROJECTS.md` — high level project overview log
- `README.md` — this file, project overview and instructions

---

## 🚀 Future Improvements
- Link ENS domain `deborah.obasogie.eth` to IPFS-hosted resume.

---

## CID Rotation — Authoritative Steps
- Update `ipfs-cid.txt` with **<NEW_CID>** (single line, no spaces).
- `eth.html` auto-redirects; **no other files change**.
- Commit one-liner:
  CID rotated → updated ipfs-cid.txt and eth.html to new CID: <NEW_CID>
- Verify: open `eth.html` → redirects to `https://ipfs.io/ipfs/<NEW_CID>/`.

## Footer Link Rule
- On GitHub Pages: show **Etherscan + IPFS (latest)** link.
- On IPFS gateways: the **IPFS link is hidden** by the script in `index.html`.
- The IPFS footer link should target `eth.html` (not a hardcoded CID).

---

## 👤 Author
**Deborah Obasogie**  
Consultant - Smart Contract, Dapps Developer | Remote - Open to contract / project-based assignments
(U.S. and International)|   
📧 obasogie.deborah@icloud.com

