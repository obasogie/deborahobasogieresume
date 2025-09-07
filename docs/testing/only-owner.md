# Verify Owner-Only Updates (Remix VM Prague + Sepolia)

## Setup
- Compiler: 0.8.21
- Deploy `addbcResume.sol` (Prague VM for local, Sepolia for testnet).

## Procedure
- For each section, test **set/add/update/remove/clear/reset** as **owner** (should succeed).
- Repeat the same calls as a **non-owner** (should revert).
- All `get...()` must be public and callable by any account.

## Checklist Format (example)
- Function: `setSummaryName(string)`
  - Owner: ✅ succeeds
  - Non-owner: ❌ reverts (onlyOwner)

Repeat for all write functions across 8 sections. After Sepolia edits, **restore to snapshot** using `clear…`, `remove…`, `reset…` as defined in scripts.
next
