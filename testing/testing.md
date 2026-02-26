# Writable Resume — deborahobasogieresume

# Testing – Remix VM Prague and Sepolia (addbcResume.sol)

## Environment
- Remix IDE, Environment = Remix VM (Prague), Sepolia testnet, Solidity compiler = 0.8.21.

- Contract: addbcResume.sol deployed from Account (0) (owner).

- Access control note

- 0.8.21 Prague VM/Sepolia testnet. Acct (0) owner in constructor. Writes owner‑only (Acct (1) reverts). All gets
  public.

## Sections tested (all 8)
  Contact
  Proficiencies
  Training
  Education
  Summary
  Highlights
  Experience
  Work History

## Scripts and checklists used
  OwnerScript.txt
  OwnerScriptFillable.pdf
  ProjectsScript.txt
  ProjectsScriptFillable.pdf
  ContactScript.txt
  ProficienciesScript.txt
  TrainingScript.txt
  EducationScript.txt
  SummaryScript.txt
  HighlightsScript.txt
  ExperienceScript.txt
  WorkHistoryScript.txt
  ResumeSectionFillable.pdf

## Owner / non‑owner procedure
  Deploy addbcResume.sol from Account (0) on Remix VM Prague and Sepolia testnet.
  Run all write functions for the 8 sections from Account (0) and confirm success via get… functions.
  Switch to Account (1) and confirm owner‑only writes revert while all get… functions continue to work from any
  account.

## Projects scripts
  ProjectsScript.txt and ProjectsScriptFillable.pdf document the content updates that showcase skills from both 
  Mirror and Writable work, and were exercised on Remix VM Prague and Sepolia testnet using the same owner / 
  non‑owner pattern.
