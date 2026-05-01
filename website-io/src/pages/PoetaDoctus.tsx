import PageShell from '../components/PageShell'
import PanelGrid from '../components/PanelGrid'
import { poetaDoctusPanels } from '../data/site'

export default function PoetaDoctus() {
  return (
    <PageShell
      eyebrow="POETOLOGIE"
      title="Poeta doctus."
      intro="Das hellenistische Ideal des »gelehrten Dichters« – Bildungsfülle, Anspielungskunst, intertextuelles Spiel – wird in Ovids Io-Erzählung exemplarisch entfaltet."
    >
      <div className="border-l-2 border-stone-700 pl-6 my-16 max-w-4xl">
        <p className="text-4xl italic leading-relaxed font-serif text-stone-800">
          »Der gelehrte Dichter schreibt nicht, damit jeder versteht —
          er schreibt, damit der gebildete Leser Funken erkennt.«
        </p>

        <p className="mt-6 text-xs tracking-[0.3em] uppercase text-stone-500">
          Definition — nach Kallimachos
        </p>
      </div>

      <PanelGrid panels={poetaDoctusPanels} />
    </PageShell>
  )
}