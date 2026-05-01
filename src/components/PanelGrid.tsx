import type { ContentPanel } from '../data/site'

type PanelGridProps = {
  panels: ContentPanel[]
}

export default function PanelGrid({ panels }: PanelGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {panels.map((panel) => (
        <article key={panel.title} className="border border-[#d8d0c3] bg-[#fbfaf5] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#8f2f1e] hover:bg-[#eeebe3]">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#8f2f1e]">{panel.kicker}</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#1f1f1b]">{panel.title}</h2>
          <p className="mt-6 leading-8 text-[#4f4942]">{panel.text}</p>
          {panel.quote ? (
            <blockquote className="mt-7 border-l border-[#8f2f1e] pl-5 font-serif text-2xl italic leading-tight text-[#2f2a24]">
              {panel.quote}
            </blockquote>
          ) : null}
        </article>
      ))}
    </div>
  )
}
