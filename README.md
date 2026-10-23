# Sophie Bu website — GitHub Pages

This folder is the static website ready to publish from the repository root. It is copied from the published Sites version 16 (`8b3064cbe453b74c30bed3ab37931e1bc2baccf5`). The `CNAME` file names the intended custom domain, `sophiebu.com`.

## Publish

1. Create a GitHub repository and upload **the contents of this folder to its root**. Keep the repository public if your GitHub plan requires that for Pages.
2. Open the repository's **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, branch **main**, folder **/(root)**, then save.
3. Once the `github.io` URL works, set **Custom domain** to `sophiebu.com` in the same Pages settings. Keep the `CNAME` file in the repository root.
4. In West.cn DNS, replace the two existing `@` A records (`162.159.143.30`, `172.66.3.26`) with these four GitHub Pages A records:

   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

5. Wait for GitHub Pages to verify DNS and issue its HTTPS certificate, then enable **Enforce HTTPS**. Keep the existing TXT records until the migration is confirmed.

Do not switch DNS before the GitHub Pages deployment works at its `github.io` URL.
