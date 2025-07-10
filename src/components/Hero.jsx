/**
 * This is the hero section – first impression matters!
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      {/* Big bold intro */}
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Full‑Stack Developer &amp; Game Designer
      </h1>
      {/* This quick blurb reminds visitors the portfolio is itself a tech demo */}
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        (You’re browsing a live portfolio built with <strong>React</strong> +
        <strong> Tailwind CSS</strong> — part of the showcase!)
      </p>

      {/* Call‑to‑actions */}
      <div className="mt-10 flex gap-4">
        <a
          href="/assets/MercyMayaResume.pdf"
          target="_blank"
          rel="noopener"
          className="bg-accent text-white px-6 py-3 rounded shadow hover:brightness-110 transition"
        >
          Download Résumé
        </a>
        <a
          href="#projects"
          className="border border-accent text-accent px-6 py-3 rounded hover:bg-accent hover:text-white transition"
        >
          View Projects
        </a>
      </div>
    </section>
  )
}
