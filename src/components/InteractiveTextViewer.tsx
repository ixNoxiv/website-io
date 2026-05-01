import { useState } from 'react'
import type { TextPassage } from '../data/site'
import { textSections } from '../data/site'

const deviceStyles: Record<string, { bg: string; border: string; swatch: string }> = {
  Alliteration: { bg: '#dbe5e6', border: '#9eb4b9', swatch: '#c8d8da' },
  Chiasmus: { bg: '#ead9d2', border: '#c99f91', swatch: '#e7cfc6' },
  Hyperbaton: { bg: '#eadfbd', border: '#c8b071', swatch: '#e5d7a8' },
  Anapher: { bg: '#d9e6d8', border: '#9fbd9c', swatch: '#cce0ca' },
  Metapher: { bg: '#ead8d0', border: '#bd8e80', swatch: '#e5c8be' },
}

const legend = ['Alliteration', 'Chiasmus', 'Hyperbaton', 'Anapher', 'Metapher']

function renderMarkedLatin(passage: TextPassage, isActive: boolean, onActivate: () => void) {
  const marks = passage.focus.split(' ... ')
  const pattern = new RegExp(`(${marks.map((mark) => mark.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')
  const parts = passage.latin.split(pattern)
  const style = deviceStyles[passage.device] ?? deviceStyles.Metapher

  return parts.map((part, index) =>
    marks.includes(part) ? (
      <button
        key={`${part}-${index}`}
        onMouseEnter={onActivate}
        onFocus={onActivate}
        onClick={onActivate}
        className="mx-0.5 border-b px-1 transition duration-300 hover:text-[#8f2f1e]"
        style={{
          backgroundColor: isActive ? style.bg : 'transparent',
          borderColor: isActive ? '#8f2f1e' : style.border,
        }}
      >
        {part}
      </button>
    ) : (
      part
    ),
  )
}

export default function InteractiveTextViewer() {
  const [activeSectionId, setActiveSectionId] = useState(textSections[0].id)
  const activeSection = textSections.find((section) => section.id === activeSectionId) ?? textSections[0]
  const [activePassageId, setActivePassageId] = useState<string | null>(null)
  const activePassage = activeSection.passages.find((passage) => passage.id === activePassageId)

  function switchSection(sectionId: string) {
    setActiveSectionId(sectionId)
    setActivePassageId(null)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {textSections.map((section) => {
          const isActive = activeSectionId === section.id

          return (
            <button
              key={section.id}
              onClick={() => switchSection(section.id)}
              className={`border px-5 py-4 font-sans text-xs uppercase tracking-[0.28em] transition ${
                isActive
                  ? 'border-[#1f1f1b] bg-[#1f1f1b] text-[#fbfaf5]'
                  : 'border-[#d8d0c3] bg-[#fbfaf5] text-[#1f1f1b] hover:border-[#8f2f1e] hover:text-[#8f2f1e]'
              }`}
            >
              {section.label} ({section.range})
            </button>
          )
        })}
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#1f1f1b]">Legende</span>
        {legend.map((device) => (
          <span key={device} className="flex items-center gap-2 font-serif text-sm italic text-[#4f4942]">
            <span>{device}</span>
            <span className="block h-1.5 w-16" style={{ backgroundColor: deviceStyles[device].swatch }} />
          </span>
        ))}
      </div>

      <div className="grid border border-[#d8d0c3] bg-[#eeebe3] lg:grid-cols-2">
        <section className="border-b border-[#d8d0c3] bg-[#fbfaf5] p-7 md:p-12 lg:border-b-0 lg:border-r">
          <p className="font-sans text-xs uppercase tracking-[0.34em] text-[#1f1f1b]">Latinum · Hexameter</p>
          <div className="mt-8 space-y-8">
            {activeSection.passages.map((passage, index) => (
              <p
                key={passage.id}
                className="grid grid-cols-[2rem_1fr] gap-3 font-serif text-2xl leading-10 text-[#1f1f1b]"
              >
                <span className="pt-1 font-sans text-xs leading-8 text-[#4f4942]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>
                  {renderMarkedLatin(passage, activePassageId === passage.id, () => setActivePassageId(passage.id))}
                </span>
              </p>
            ))}
          </div>
        </section>

        <section className="p-7 md:p-12">
          <p className="font-sans text-xs uppercase tracking-[0.34em] text-[#1f1f1b]">Übersetzung · Deutsch</p>
          <div className="mt-8 space-y-8">
            {activeSection.passages.map((passage, index) => (
              <p key={passage.id} className="grid grid-cols-[2rem_1fr] gap-3 text-xl leading-8 text-[#1f1f1b]">
                <span className="pt-1 font-sans text-xs leading-8 text-[#4f4942]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{passage.german}</span>
              </p>
            ))}
          </div>
        </section>
      </div>

      <aside className="border border-[#d8d0c3] bg-[#eeebe3] p-8 md:p-10">
        <p className="font-sans text-xs uppercase tracking-[0.34em] text-[#1f1f1b]">Stilfigur</p>
        {activePassage ? (
          <>
            <h2 className="mt-4 font-serif text-4xl text-[#8f2f1e]">{activePassage.device}</h2>
            <p className="mt-4 max-w-4xl leading-8 text-[#4f4942]">{activePassage.note}</p>
          </>
        ) : (
          <p className="mt-4 max-w-4xl font-serif text-xl italic leading-8 text-[#4f4942]">
            Hover über ein markiertes lateinisches Wort - hier erscheint die Erläuterung der Stilfigur.
          </p>
        )}
      </aside>
    </div>
  )
}
