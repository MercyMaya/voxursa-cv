/**
 * This is the sticky navigation bar with a classy glass‑blur.
 */
export default function Navbar({ dark, setDark }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-800/70">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Site logo / name */}
        <a href="#hero" className="font-bold text-xl tracking-wide">Mercy&nbsp;Maya</a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-6">
          <li><a href="#projects" className="hover:text-accent">Projects</a></li>
          <li><a href="#skills" className="hover:text-accent">Skills</a></li>
          <li><a href="#contact" className="hover:text-accent">Contact</a></li>
        </ul>

        {/* Dark mode toggle */}
        <button
          onClick={() => setDark(!dark)}
          aria-label="Toggle dark mode"
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {dark ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  )
}