# PROJECTS — Updatable Résumé

## Mirror Résumé (static)
- Static PDF / HTML snapshots published to GitHub (no on‑chain state).
- Changes require re‑exporting and re‑publishing the resume file.
- Good for quick viewing and traditional submissions (email, upload portals).

## Writable (addbcResume)
- Smart‑contract‑backed résumé deployed on Ethereum (Solidity 0.8.21, Remix Prague → Sepolia). [web:28][web:34]
- Owner-only updates (set/add/update/remove/clear/reset) enforced via `onlyOwner`.
- Section coverage: Contact, Proficiencies, Training, Education, Summary, Highlights, Experience,
  Work History.
- Scripts: ContactScript.txt, ProficienciesScript.txt, TrainingScript.txt,EducationScript.txt,
  SummaryScript.txt, HighlightsScript.txt, ExperienceScript.txt, WorkHistoryScript.txt (standard
  format).
- Testing: OwnerScript.txt + ProjectsScript.txt documented in docs/testing/testing.md.

## Skills Demonstrated
- Smart contracts and dApp patterns (Solidity, Remix, Ethereum testnets). [web:28][web:36]
- IPFS hosting and GitHub Pages deployment.
- Documentation discipline: checklists, versioned PDFs, and test evidence.
