# Footer Links Policy

## When the site is hosted on GitHub Pages
Show BOTH:
- Etherscan transaction/address link
- IPFS (current CID) link

Example HTML:
<footer class="footer">
  <span>© Deborah Obasogie</span>
  <span> · </span>
  <a href="https://etherscan.io/address/REPLACE_ADDRESS" target="_blank" rel="noopener">Etherscan</a>
  <span> · </span>
  <a href="https://ipfs.io/ipfs/REPLACE_CID/" target="_blank" rel="noopener">IPFS (current)</a>
</footer>

## When the site is served from IPFS
Show ONLY:
- Etherscan transaction/address link

Example HTML:
<footer class="footer">
  <span>© Deborah Obasogie</span>
  <span> · </span>
  <a href="https://etherscan.io/address/REPLACE_ADDRESS" target="_blank" rel="noopener">Etherscan</a>
</footer>

## How the build decides which footer to show (optional)
If you want one file to handle both contexts, add this script:
<script>
  (function(){
    var onIpfs = location.hostname.endsWith('.ipfs.dweb.link') ||
                 location.hostname === 'ipfs.io' ||
                 location.pathname.startsWith('/ipfs/');
    var ipfsLink = document.querySelector('.footer a[href*="ipfs.io/ipfs"]');
    if (onIpfs && ipfsLink) ipfsLink.parentElement.removeChild(ipfsLink.previousElementSibling), ipfsLink.remove();
  })();
</script>
