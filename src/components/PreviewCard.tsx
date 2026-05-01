import { Link } from 'react-router-dom'

type PreviewCardProps = {
  eyebrow: string
  title: string
  description: string
  to: string
}

export default function PreviewCard({ eyebrow, title, description, to }: PreviewCardProps) {
  return (
    <Link
      to={to}
      className="group block border border-[#d8d0c3] bg-[#fbfaf5]/80 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#8f2f1e] hover:bg-[#eeebe3]"
    >
      <p className="font-sans text-xs uppercase tracking-[0.28em] text-[#8f2f1e]">{eyebrow}</p>
      <h2 className="mt-5 font-serif text-3xl leading-tight text-[#1f1f1b] transition group-hover:text-[#8f2f1e]">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-[#736a5f]">{description}</p>
      <span className="mt-8 inline-flex text-sm text-[#8f2f1e] transition group-hover:translate-x-1">
        Öffnen
      </span>
    </Link>
  )
}
