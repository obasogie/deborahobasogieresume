# Updating the Site When the IPFS CID Changes

## TL;DR one-liner (commit message)
CID rotated → updated ipfs-latest.txt and ipfs.html to new CID: <NEW_CID>

## Files involved
- ipfs-latest.txt — contains ONLY the latest CID (no spaces/newlines if possible)
- ipfs.html — tiny redirector to the latest CID

## Standard procedure (manual)
1) Upload the new site build to IPFS. Copy the new root CID: <NEW_CID>.
2) Open ipfs-latest.txt and replace its content with <NEW_CID> (exact CID only).
3) Ensure ipfs.html redirects to whatever is in ipfs-latest.txt (template below).
4) Commit: `CID rotated → updated ipfs-latest.txt and ipfs.html to new CID: <NEW_CID>`
5) Push to GitHub.

## ipfs.html (redirector template)
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Redirecting to latest IPFS</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script>
    // Fetch latest CID from ipfs-latest.txt and redirect
    fetch('ipfs-latest.txt', {cache: 'no-store'})
      .then(r => r.text())
      .then(cid => {
        cid = cid.trim();
        if (cid) location.replace('https://ipfs.io/ipfs/' + cid + '/');
        else document.body.textContent = 'Missing CID in ipfs-latest.txt';
      })
      .catch(() => document.body.textContent = 'Unable to read ipfs-latest.txt');
  </script>
  <noscript>
    This page redirects to the latest IPFS CID listed in ipfs-latest.txt.
    Please enable JavaScript or open https://ipfs.io/ipfs/<CID_HERE>/
  </noscript>
</head>
<body style="font:16px/1.4 system-ui, Arial">
  Redirecting to latest IPFS content…
</body>
</html>
