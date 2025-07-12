/******************************************************************************
 *  src/components/Projects.jsx
 *
 *  This section is the grand tour — a quick stroll past the greatest hits.
 *  Each card is a “look-what-I-made” moment complete with screenshots, code,
 *  and (where possible) a live link so curious minds can poke around.
 ******************************************************************************/

import projects from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-10 px-4">
        {projects.map((p) => (
          <article
            key={p.name}
            className="grid md:grid-cols-2 gap-6 items-center bg-gray-50 dark:bg-gray-800 p-6 rounded shadow-md"
          >
            {/* Eye-candy first: hero shot in glorious 16:9 */}
            {p.image ? (
              <img
                src={import.meta.env.BASE_URL + p.image}
                alt={`${p.name} screenshot`}
                className="w-full h-full object-cover rounded shadow"
              />
            ) : (
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded" />
            )}

            <div>
              <h3 className="text-2xl font-semibold">{p.name}</h3>

              {/* Elevator pitch in two sentences or less */}
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {p.description}
              </p>

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
