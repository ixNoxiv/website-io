import { useState } from 'react'

type Relation = {
  label: string
  target: string
}

type CharacterNode = {
  id: string
  name: string
  subtitle: string
  origin: string
  role: string
  description: string
  relations: Relation[]
  x: number
  y: number
}

export const characterNodes: CharacterNode[] = [
  {
    id: 'io',
    name: 'Io',
    subtitle: 'Inachis',
    origin: 'Tochter des Flussgottes Inachus',
    role: 'Protagonistin, Nymphe',
    description:
      'Junge Flussnymphe von ausgesuchter Schönheit. Jupiter verführt und vergewaltigt sie, verwandelt sie in eine Kuh und löst damit ihre Irrfahrt aus. Ihr Schicksal bildet das Zentrum der Erzählung.',
    relations: [
      { label: 'vergewaltigt', target: 'iuppiter' },
      { label: 'wird bestraft von', target: 'iuno' },
      { label: 'Tochter von', target: 'inachus' },
      { label: 'bewacht von', target: 'argus' },
      { label: 'befreit von', target: 'mercurius' },
      { label: 'wird zu', target: 'isis' },
    ],
    x: 50,
    y: 50,
  },

  {
    id: 'iuppiter',
    name: 'Iuppiter',
    subtitle: 'Göttervater, Liebhaber',
    origin: 'Sohn des Saturn',
    role: 'Göttervater, Liebhaber',
    description:
      'Liebestrunkener Gott, der Io zuerst verführt und schließlich vergewaltigt. Um Junos Eifersucht zu entgehen, verwandelt er Io in eine Kuh und verhüllt die Welt mit Wolken.',
    relations: [
      { label: 'vergewaltigt', target: 'io' },
      { label: 'Gatte von', target: 'iuno' },
      { label: 'beauftragt', target: 'mercurius' },
    ],
    x: 25,
    y: 25,
  },

  {
    id: 'iuno',
    name: 'Iuno',
    subtitle: 'Eifersüchtige Gattin',
    origin: 'Schwester und Gattin Jupiters',
    role: 'Göttin der Ehe',
    description:
      'Durchschaut Jupiters Täuschung, fordert Io als Geschenk und setzt Argus als Wächter ein. Verfolgt Io bis nach Ägypten.',
    relations: [
      { label: 'Gatte von', target: 'iuppiter' },
      { label: 'setzt ein', target: 'argus' },
      { label: 'verfolgt', target: 'io' },
    ],
    x: 75,
    y: 25,
  },

  {
    id: 'argus',
    name: 'Argus',
    subtitle: 'Panoptes',
    origin: 'Sohn des Arestor',
    role: 'Allsehender Wächter',
    description:
      'Hundertäugiger Wächter der Io. Wird von Mercurius durch Musik und Erzählung eingeschläfert und enthauptet.',
    relations: [
      { label: 'bewacht', target: 'io' },
      { label: 'gesetzt von', target: 'iuno' },
      { label: 'getötet von', target: 'mercurius' },
    ],
    x: 80,
    y: 65,
  },

  {
    id: 'mercurius',
    name: 'Mercurius',
    subtitle: 'Hermes',
    origin: 'Sohn Jupiters und der Maia',
    role: 'Bote, List und Mord',
    description:
      'Von Jupiter beauftragt, Io zu befreien. Täuscht Argus mit Flöte und Syrinx-Erzählung und tötet ihn schließlich.',
    relations: [
      { label: 'befreit', target: 'io' },
      { label: 'beauftragt von', target: 'iuppiter' },
      { label: 'tötet', target: 'argus' },
      { label: 'erzählt von', target: 'syrinx' },
    ],
    x: 50,
    y: 85,
  },

  {
    id: 'inachus',
    name: 'Inachus',
    subtitle: 'Flussgott',
    origin: 'Flussgott in Argos',
    role: 'Vater',
    description:
      'Erkennt Io in ihrer verwandelten Form und klagt über ihr Schicksal.',
    relations: [{ label: 'Vater von', target: 'io' }],
    x: 20,
    y: 65,
  },

  {
    id: 'syrinx',
    name: 'Syrinx',
    subtitle: 'Nymphe (Binnenerzählung)',
    origin: 'Nymphe Arkadiens',
    role: 'Keusche Nymphe',
    description:
      'Wird von Pan verfolgt und in Schilfrohr verwandelt. Ursprung der Panflöte.',
    relations: [
      { label: 'verfolgt von', target: 'pan' },
      { label: 'erzählt von', target: 'mercurius' },
    ],
    x: 20,
    y: 90,
  },

  {
    id: 'pan',
    name: 'Pan',
    subtitle: 'Hirtengott',
    origin: 'Arkadischer Gott',
    role: 'Verfolger',
    description:
      'Verfolgt Syrinx und spiegelt die Gewalt Jupiters an Io.',
    relations: [{ label: 'verfolgt', target: 'syrinx' }],
    x: 80,
    y: 90,
  },

  {
    id: 'isis',
    name: 'Isis',
    subtitle: 'Göttin',
    origin: 'Ägyptische Göttin',
    role: 'Göttliche Verwandlung',
    description:
      'Io wird in Ägypten zur Göttin Isis erhoben und kultisch verehrt.',
    relations: [{ label: 'entsteht aus', target: 'io' }],
    x: 50,
    y: 10,
  },
]
function getNode(id: string) {
  return characterNodes.find((n) => n.id === id)!
}

function isActiveEdge(activeId: string, from: string, to: string) {
  return activeId === from || activeId === to
}

export default function CharacterNetwork() {
  const [activeId, setActiveId] = useState('io')
  const active = getNode(activeId)

  return (
    <div className="grid gap-8 xl:grid-cols-[1.35fr_0.65fr]">

      {/* ===================== NETWORK ===================== */}
      <div>
        <div className="overflow-x-auto border border-[#d8d0c3] bg-[#fbfaf5]">
          <div className="relative aspect-4/3 overflow-hidden bg-[#fbfaf5] border border-[#d8d0c3]">
            {/* LINES */}
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
            >
              {characterNodes.flatMap((node) =>
                node.relations.map((rel) => {
                  const from = node
                  const to = getNode(rel.target)

                  const midX = (from.x + to.x) / 2
                  const midY = (from.y + to.y) / 2
                  const curve = 6

                  const activeEdge = isActiveEdge(activeId, from.id, to.id)

                  return (
                    <path
                      key={`${from.id}-${to.id}`}
                      d={`
                        M ${from.x} ${from.y}
                        Q ${midX} ${midY - curve}
                          ${to.x} ${to.y}
                      `}
                      fill="none"
                      stroke={activeEdge ? '#8C3123' : '#D5D1C4'}
                      strokeWidth={activeEdge ? 0.25 : 0.15}
                      strokeDasharray={activeEdge ? '0' : '0.8 0.6'}
                      strokeOpacity={activeEdge ? 1 : 0.4}
                      strokeLinecap="round"
                      opacity={activeEdge ? 1 : 0.55}
                      className="transition-all duration-300"
                    />
                  )
                }),
              )}
            </svg>

            {/* NODES */}
            {characterNodes.map((node) => {
              const isActive = activeId === node.id

              return (
                <button
                  key={node.id}
                  onClick={() => setActiveId(node.id)}
                  className="group absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >

                  <span
                    className={`mb-2 font-serif italic transition ${
                      isActive
                        ? 'text-xl font-semibold text-[#1f1f1b]'
                        : 'text-lg text-[#2f2a24] group-hover:text-[#c0602e]'
                    }`}
                  >
                    {node.name}
                  </span>

                  <span
                    className={`h-8 w-8 rounded-full border-2 transition duration-300 ${
                      isActive
                        ? 'border-[#1f1f1b] bg-[#c0602e] scale-110 shadow-[0_0_20px_rgba(192,96,46,0.25)]'
                        : 'border-[#1f1f1b] bg-[#fbfaf5] group-hover:border-[#c0602e] group-hover:bg-[#ead2c4]'
                    }`}
                  />
                </button>
              )
            })}

          </div>
        </div>

        {/* ===================== GRID SELECTOR (BEHALTEN) ===================== */}
        <div className="mt-6 grid grid-cols-2 border-l border-t border-[#d8d0c3] sm:grid-cols-3 lg:grid-cols-5">

          {characterNodes.map((node) => (
            <button
              key={node.id}
              onClick={() => setActiveId(node.id)}
              className={`min-h-24 border-b border-r border-[#d8d0c3] p-4 text-left transition duration-300 ${
                activeId === node.id
                  ? 'bg-[#1f1f1b] text-[#fbfaf5]'
                  : 'bg-[#fbfaf5] text-[#1f1f1b] hover:bg-[#eeebe3] hover:text-[#c0602e]'
              }`}
            >
              <span className="block font-serif text-2xl italic">
                {node.name}
              </span>

              <span className="mt-2 block truncate text-[0.65rem] uppercase tracking-[0.24em] opacity-80">
                {node.role}
              </span>
            </button>
          ))}

        </div>
      </div>

      {/* ===================== SIDEBAR ===================== */}
      <article className="border border-[#d8d0c3] bg-[#eeebe3] p-8 md:p-10">

        <p className="text-xs uppercase tracking-[0.34em] text-[#c0602e]">
          {active.role}
        </p>

        <h2 className="mt-6 font-serif text-6xl leading-none text-[#1f1f1b]">
          {active.name}
        </h2>

        <p className="mt-9 leading-8 text-[#4f4942]">
          {active.description}
        </p>

        <div className="mt-9 border-t border-[#cfc6b8] pt-7">
          <p className="text-xs uppercase tracking-[0.28em] text-[#4f4942]">
            Verbindungen
          </p>

          <div className="mt-5 space-y-3">
            {active.relations.map((r) => (
              <button
                key={r.target}
                onClick={() => setActiveId(r.target)}
                className="flex w-full justify-between text-left text-sm text-[#4f4942] hover:text-[#c0602e]"
              >
                <span>{r.label}</span>
                <span className="font-serif italic underline">
                  {getNode(r.target).name}
                </span>
              </button>
            ))}
          </div>

        </div>
      </article>

    </div>
  )
}