/**
 * This is the hero section – first impression matters!
 */
export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Big bold intro */}
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Full‑Stack Developer &amp; Game Designer
      </h1>
      <p className="mt-6 max-w-2xl text-lg md:text-xl">
        Turning bold ideas into polished code &amp; immersive games.<br />
        <span className="text-accent">Let’s build something extraordinary.</span>
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