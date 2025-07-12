/******************************************************************************
 *  src/data/projects.js
 *
 *  Pssst—lean in.  This array is my trophy shelf.  Each object below
 *  powers a glossy card on the site: headline, punchline, code link,
 *  (sometimes) a live demo, and a 16 : 9 WebP glam-shot.
 ******************************************************************************/

/* ───────────────────────────────────── TaskR ───────────────────────────── */
export default [
  {
    name: 'TaskR – Android To-Do App',
    description:
      'Native Android to-do manager sculpted in Kotlin & Jetpack Compose. MVVM architecture, Room DB for offline sync, coroutine flows for reactive UI, Material3 theming with dark mode, and CI/CD via GitHub Actions. Sporting a 4.6★ rating on Google Play.',
    code: 'https://github.com/MercyMaya/TaskR',
    demo: 'https://play.google.com/store/apps/details?id=com.mercymayagames.taskr',
    image: 'assets/taskr.webp'
  },

  /* ─────────────── Halon Website Performance Overhaul ─────────────── */
  {
    name: 'Halon Website Performance Overhaul',
    description:
      'Enterprise WordPress rescue: automated WebP/AVIF conversion (Node + Sharp), injected responsive srcset, and IntersectionObserver-powered lazy-loading. Trimmed 95 GB, cut FCP by 50 %, and rocketed Lighthouse 34 → 98. Theme refactored to PHP 8 + Twig for future-proofing.',
    code: 'https://halon.com',
    demo: null,
    image: 'assets/halon.webp'
  },

 /* ───────────────────────── BookTracker – Reading Log Software ────────── */
  {
    name: 'BookTracker – Reading Log Software',
    description:
      'Full-stack reading log carved with vanilla JS, PHP, and MySQL.  Features Google Books look-ups, dynamic masonry grids, modals, and REST-flavored endpoints.  Flexes CRUD, client-side filtering, and responsive design without a heavyweight framework.',
    code: 'https://github.com/MercyMaya/booktracker',
    demo: 'https://voxursa.com/booktracker/dashboard.html',
    image: 'assets/booktracker.webp'
  },

/* ─────────────── Mercy Maya’s Portfolio – Website (this very site) ──── */
  {
    name: 'Mercy Maya\'s Portfolio – Website',
    description:
      'A one-page React + Tailwind showcase hand-tuned for 100/100 Lighthouse scores.  Dark-mode toggle, client-side routing, lazy-loaded WebP assets, and a build pipeline (Vite) that compiles to zero-dependency static files fit for shared hosting.',
    code: 'https://github.com/MercyMaya/voxursa-cv',
    demo: 'https://voxursa.com/cv/',
    image: 'assets/portfolio.webp'
  }
]
