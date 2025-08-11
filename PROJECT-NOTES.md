# 📘 Project Documentation Summary

**Project:** Blockchain-Connected Resume — UI on GitHub Pages, backend on Sepolia testnet.

--

A decentralized professional resume project with a static HTML/CSS/JavaScript front end hosted on GitHub Pages, and a Solidity smart contract backend planned for deployment on the Ethereum Sepolia testnet.  
The resume includes verified credential links and permanent storage on IPFS.

---

## 🔗 Live Links
- **GitHub Pages:** [https://obasogie.github.io/final-polished-resume/](https://obasogie.github.io/final-polished-resume/)
- **IPFS Permanent Link:** [https://ipfs.io/ipfs/bafybeidzt4sqlx6xgtpp7e2lr2xuxmvxns2rysddcxez6jq2vswlublqk4/index.html](https://ipfs.io/ipfs/bafybeidzt4sqlx6xgtpp7e2lr2xuxmvxns2rysddcxez6jq2vswlublqk4/index.html)

---
## 🖥️ Front End
- HTML/CSS resume UI with responsive dual-column layout
- Verified credential links
- Hosted on GitHub Pages
- Version-controlled on GitHub

---

## 🔗 Back End
- Solidity smart contract `bcResume.sol` created and committed
- Read-only sections: Contact Info, Proficiencies, Recent Training, Professional Experience, Education, Work History, Summary & Highlights
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
- Replit for preview and testing

---

## 📌 Repository File Overview
- `index.html` — main resume page
- `style.css` — site styling
- `web3.min.js` — local Web3 library for blockchain interaction (replaces CDN)
- `contract/bcResume.sol` — Solidity smart contract source code
- `PROJECT-NOTES.md` — detailed project documentation and development log
- `README.md` — this file, project overview and instructions

---

## 🚀 Future Improvements
- Deploy smart contract to Sepolia and verify integration
- Link ENS domain to IPFS-hosted resume
- Add dynamic update functions to the smart contract
- Provide downloadable PDF and print-friendly versions

---

## CID Rotation — Authoritative Steps
- Update `ipfs-latest.txt` with **<NEW_CID>** (single line, no spaces).
- `ipfs.html` auto-redirects; **no other files change**.
- Commit one-liner:
  CID rotated → updated ipfs-latest.txt and ipfs.html to new CID: <NEW_CID>
- Verify: open `ipfs.html` → redirects to `https://ipfs.io/ipfs/<NEW_CID>/`.

## Footer Link Rule
- On GitHub Pages: show **Etherscan + IPFS (latest)** link.
- On IPFS gateways: the **IPFS link is hidden** by the script in `index.html`.
- The IPFS footer link should target `ipfs.html` (not a hardcoded CID).

---

## 👤 Author
**Deborah Obasogie**  
Information Technology Consultant | Web3 Enthusiast | Blockchain Developer  
📧 obasogie.deborah@icloud.com

