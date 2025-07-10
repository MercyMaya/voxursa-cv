# Mercy Maya – Developer Portfolio

This repository contains the source code for **voxursa.com/cv**, my tech‑focused résumé site.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser to see the site.

## Build for production

```bash
npm run build
```

Upload the **contents** of `dist/` to `voxursa.com/cv/` via FTP.

## Notes

* Tailwind CSS purges unused styles on build, keeping CSS tiny.
* Dark‑mode toggle saves preference in `localStorage`.
* All major sections live in `src/components/`.
* Projects are defined in `src/data/projects.js` – add new items & rebuild.

Happy coding!