import { useState } from 'react'
import { transformations } from '../data/site'

export default function TransformationExplorer() {
  const [activeId, setActiveId] = useState(transformations[0].id)
  const active = transformations.find((item) => item.id === activeId) ?? transformations[0]

  return (
    <div className="grid gap-8 lg:grid-cols-[0.48fr_0.52fr]">
      <div className="border border-[#d8d0c3] bg-[#fbfaf5] p-6 md:p-8">
        <p className="font-sans text-xs uppercase tracking-[0.34em] text-[#8f2f1e]">Stationen</p>
        <div className="relative mt-8 space-y-4">
          <div className="absolute bottom-8 left-7 top-8 w-px bg-[#d8d0c3]" />
          {transformations.map((item) => {
            const isActive = activeId === item.id

            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className="group relative grid w-full grid-cols-[4rem_1fr] gap-4 text-left"
              >
                <span
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border font-serif text-2xl transition duration-300 ${
                    isActive
                      ? 'border-[#8f2f1e] bg-[#8f2f1e] text-[#fbfaf5]'
                      : 'border-[#1f1f1b] bg-[#fbfaf5] text-[#1f1f1b] group-hover:border-[#8f2f1e] group-hover:text-[#8f2f1e]'
                  }`}
                >
                  {item.phase}
                </span>
                <span className="border-b border-[#d8d0c3] pb-4">
                  <span className="block font-sans text-[0.65rem] uppercase tracking-[0.24em] text-[#766f65] transition group-hover:text-[#8f2f1e]">
                    {item.location}
                  </span>
                  <span className="mt-2 block font-serif text-2xl leading-tight text-[#1f1f1b] transition group-hover:text-[#8f2f1e]">
                    {item.title}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <article className="border border-[#d8d0c3] bg-[#eeebe3] p-8 md:p-10">
        <p className="font-sans text-xs uppercase tracking-[0.34em] text-[#8f2f1e]">
          Phase {active.phase} · {active.location}
        </p>
        <h2 className="mt-5 font-serif text-5xl leading-none text-[#1f1f1b] md:text-6xl">{active.title}</h2>
        <blockquote className="mt-9 border-l border-[#8f2f1e] pl-6 font-serif text-3xl leading-tight text-[#2f2a24]">
          {active.quote}
        </blockquote>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="border-t border-[#cfc6b8] pt-5">
            <p className="text-xs uppercase tracking-[0.28em] text-[#8f2f1e]">Vorher</p>
            <p className="mt-3 leading-7 text-[#5f5a52]">{active.before}</p>
          </div>
          <div className="border-t border-[#cfc6b8] pt-5">
            <p className="text-xs uppercase tracking-[0.28em] text-[#8f2f1e]">Nachher</p>
            <p className="mt-3 leading-7 text-[#5f5a52]">{active.after}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-[#cfc6b8] pt-7">
          <p className="text-xs uppercase tracking-[0.28em] text-[#8f2f1e]">Bedeutung</p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4f4942]">{active.meaning}</p>
        </div>
      </article>
    </div>
  )
}
