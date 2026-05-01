import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 text-center">
      <div>
        <p className="font-sans text-xs uppercase tracking-[0.32em] text-[#8f2f1e]">404</p>
        <h1 className="mt-4 font-serif text-6xl text-[#2f2a24]">Seite nicht gefunden</h1>
        <Link to="/" className="mt-8 inline-flex text-[#8f2f1e] transition hover:text-[#1f1f1b]">
          Zur Startseite
        </Link>
      </div>
    </main>
  )
}
