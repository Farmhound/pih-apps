# PIH Apps — home screen app wrapper

One installable "app" for phones that opens your Apps Script web apps full screen,
with a PIH icon and name. Add new projects by editing `apps.js`.

## Files
- `index.html` — home screen (list of apps) and the full-screen app view
- `apps.js` — the list of apps and their web app URLs (the only file you normally edit)
- `manifest.webmanifest`, `sw.js` — make it installable as an app
- `icons/` — app icons

## Put it online (GitHub Pages, free)
1. Sign in at github.com (create a free account if needed).
2. Click **+ → New repository**, name it `pih-apps`, set it to **Public**, tick **Add a README**, and click **Create repository**.
3. Click **Add file → Upload files**, drag in everything from this folder (including the `icons` folder), and click **Commit changes**.
4. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to *Deploy from a branch*, **Branch** to `main` and folder `/ (root)`, then **Save**.
5. After a minute the site is live at `https://YOUR-USERNAME.github.io/pih-apps/`.

## Install on a phone
- **iPhone:** open the link in Safari → Share → **Add to Home Screen**.
- **Android:** open the link in Chrome → tap **Install app** (or ⋮ → Add to Home screen).

Shortcut straight to one app: `https://YOUR-USERNAME.github.io/pih-apps/?app=survey-form`
(ids are in `apps.js`). Add that link to the home screen for a one-tap form.

## Adding a new project
Edit `apps.js` on GitHub (pencil icon), copy a block, change `id`, `name`,
`description`, `colour` and `url`, then **Commit changes**. Phones pick it up next time the app is opened.

## Apps Script settings needed
- Deployment **Who has access: Anyone** works best inside the wrapper. If it is set to
  sign-in only, Google may block the sign-in page inside the app — use the ↗ button to open in the browser.
- Each web app's `doGet` must allow framing: `.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)`
  (already set in the Plumbing Survey).
