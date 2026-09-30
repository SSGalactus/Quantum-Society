# Quantum Society website

A simple, fast website that runs on **GitHub Pages** — no build tools, no installs.

## Files

| File | What it is |
|------|------------|
| `index.html` | The page itself (rarely needs editing) |
| `content.js` | **All the text, events, team members, links and colours — edit this one** |
| `styles.css` | The look and feel |
| `script.js`  | Builds the page from `content.js` (no need to edit) |

## Put it online (GitHub Pages)

1. Create a new repository on GitHub (e.g. `quantum-society`).
2. Click **Add file → Upload files**, drag in all the files from this folder, and click **Commit changes**.
   Make sure `index.html` sits at the top level of the repo, not inside a subfolder.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
4. After a minute or two your site will be live at `https://YOUR-USERNAME.github.io/quantum-society/`.

## Editing the website

Open `content.js` on GitHub, click the ✏️ pencil icon, make your changes, and click **Commit changes**. The site updates within a minute or two.

- **Add an event:** copy one `{ date: ..., title: ... }` block in `events.items`, paste it after a comma, and edit it. Dates use `YYYY-MM-DD`. Past events automatically move to a "Past events" list.
- **Add or change committee members:** edit `team.members`. For a photo, upload an image (e.g. `images/alex.jpg`) and set `photo: "images/alex.jpg"`. Leave `photo: ""` to show initials.
- **Change colours:** edit `theme.accent` and `theme.accent2`.
- **Remove a section:** delete it (e.g. the whole `resources: { ... },` block). Its menu link disappears too.
- **Sign-up link:** set `join.button.link` to your Google Form / student union page, and `join.email` to your club email.

If the page ever shows up blank after an edit, there's usually a missing comma or quote mark in `content.js` — check the line you just changed.

## Preview on your computer

Just double-click `index.html` to open it in your browser.

## Custom domain (optional)

In **Settings → Pages → Custom domain**, enter your domain and follow GitHub's instructions.
