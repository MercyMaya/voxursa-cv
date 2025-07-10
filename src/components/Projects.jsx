import projects from '../data/projects'

/**
 * Projects section – each card is a résumé bullet brought to life.
 */
export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="max-w-5xl mx-auto flex flex-col gap-10 px-4">
        {projects.map((p) => (
          <article
            key={p.name}
            className="grid md:grid-cols-2 gap-6 items-center bg-gray-50 dark:bg-gray-800 p-6 rounded shadow-md"
          >
            {/* Placeholder for screenshot */}
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded" />

            <div>
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{p.description}</p>
              <div className="mt-4 flex gap-4">
                <a
                  href={p.code}
                  className="text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    className="text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
