# Deborah Obasogie — Résumé Project

**Mirror (bcResume)** + **Writable (addbcResume)** — unified GitHub Pages & IPFS presence.  
All wording preserved in full; no abbreviations. Section order and styling match the PDF design.

## Live Demos
- GitHub Pages (Writable UI): <ADD_LINK>
- IPFS Mirror: <ADD_IPFS_LINK>

## Contracts
- `contracts/bcResume.sol` (read-only, mirror)
- `contracts/addbcResume.sol` (writable, owner-only updates; Solidity 0.8.21)

## Project Scripts (Remix flow)
- `scripts/*Script.txt` for each section (Create → Name → Titles → Items → Verify → Edit/Delete/Update)
- `OwnerScript.txt` (verify owner-only updates)
- `ProjectsScript.txt` (skills showcase; mirror vs. writable)

## How to Test (Remix VM Prague)
- See **docs/testing/only-owner.md**

## Career Timeline
- 1999 → Now — see **docs/history/** and `resume-archives/`

## Notes
- UI drives everything. Do not regenerate files; update only the exact starters.
- Compiler: **0.8.21** for all Solidity work.

