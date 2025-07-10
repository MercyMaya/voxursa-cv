/**
 * Simple footer with contact info – closes the show.
 */
export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-100 dark:bg-gray-900 py-10">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p>
          Reach out at{' '}
          <a href="mailto:VoxUrsa@gmail.com" className="text-accent">
            VoxUrsa@gmail.com
          </a>
        </p>
        <p>
          <a
            href="https://github.com/MercyMaya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub ▸ MercyMaya
          </a>
          {' · '}
          <a
            href="https://voxursa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Voice‑Over Site
          </a>
        </p>
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Mercy Maya. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
