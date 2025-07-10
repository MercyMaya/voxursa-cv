/**
 * This is where we highlight technical proficiencies – quick visual bragging rights.
 */
const skills = [
  { name: 'JavaScript', cat: 'Language' },
  { name: 'TypeScript', cat: 'Language' },
  { name: 'React', cat: 'Frontend' },
  { name: 'Tailwind CSS', cat: 'Frontend' },
  { name: 'Node.js', cat: 'Backend' },
  { name: 'MySQL', cat: 'Database' },
  { name: 'Unity', cat: 'Game Dev' },
  { name: 'Docker', cat: 'DevOps' }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12">Skills Snapshot</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
        {skills.map((s) => (
          <div
            key={s.name}
            className="bg-white/70 dark:bg-gray-900/60 backdrop-blur rounded p-4 text-center shadow"
          >
            <span className="block text-xl font-semibold">{s.name}</span>
            <span className="text-xs uppercase tracking-wide text-gray-500">{s.cat}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
