import { Link } from 'react-router-dom'

const sections = [
  {
    number: '§ I',
    title: 'Exposition — Argos',
    lead: 'Der Flussgott Inachus trauert um seine verschollene Tochter. Ovid setzt den Ton: eine Landschaft in Schwebe, ein Vater im Ungewissen.',
    body: 'Nach dem Apollo-Daphne-Mythos schaltet Ovid abrupt um. Inachus ist »einzig« unter den Flussgöttern abwesend (»Inachus unus abest«) — sein Fluss dünn, sein Gesicht gebeugt. Diese Leerstelle markiert die Schwelle zu einer neuen Erzählung, in der die Protagonistin zunächst nur als Objekt der Sehnsucht anwesend ist.',
  },
  {
    number: '§ II',
    title: 'Die Verfolgung bei Lerna',
    lead: 'Jupiter erblickt Io, wirbt, dann droht er. Die Sprache der Verführung kippt in wenigen Versen zur Sprache der Gewalt.',
    body: 'Die Anrede »o virgo Iove digna« klingt wie eine Liebeserklärung — in Wahrheit ist sie ein Herrschaftsanspruch. Io flieht, Jupiter hüllt die Erde in eine künstliche Wolke und vollzieht die Vergewaltigung. Ovid formuliert den Akt in einem einzigen, kalt-raschen Vers: »tenuit fugientem rapuitque pudorem«.',
  },
  {
    number: '§ III',
    title: 'Juno deckt die Täuschung auf',
    lead: 'Juno sieht die unnatürliche Finsternis. Jupiter rettet sich in eine zweite Gewalt: die Verwandlung.',
    body: 'Junos Blick von oben (»despexit in agros«) ist programmatisch: sie ist die Instanz der Aufdeckung. Jupiter verwandelt Io eilig in eine schneeweiße Färse — ein Versteck aus Fleisch. Juno wittert den Betrug, fordert das Tier als Geschenk und übergibt es dem hundertäugigen Argus.',
  },
  {
    number: '§ IV',
    title: 'Die stumme Schrift',
    lead: 'Io erkennt sich selbst, als sie sich im Wasser sieht. Mit dem Huf zeichnet sie ein einziges Zeichen.',
    body: 'Als Inachus seiner Tochter begegnet, ohne sie zu erkennen, schreibt Io zwei Buchstaben in den Staub — »I O«. Die Schrift als letzte Sprache des entmenschlichten Körpers: ein Ovidsches Schlüsselbild, in dem Literatur selbst zum Thema wird. Der Vater klagt in doppeltem »me miserum!« — eine Anapher des Schmerzes.',
  },
  {
    number: '§ V',
    title: 'Mercur, Flöte, Argus',
    lead: 'Jupiter entsendet Mercur. Dieser bringt Argus mit der Geschichte von Syrinx zum Schlafen — und zum Tod.',
    body: 'Mercur naht als Hirte, spielt auf der Rohrflöte und erzählt die Syrinx-Episode: eine weitere Verfolgungs-Verwandlungs-Geschichte, die der Io-Erzählung als Spiegel eingelegt wird. Mit jedem Schlaf eines Augenpaars sinkt die Wachsamkeit; schließlich fällt das Schwert. Juno rettet die hundert Augen auf den Pfauenschwanz.',
  },
  {
    number: '§ VI',
    title: 'Irrfahrt und Rückverwandlung',
    lead: 'Juno hetzt Io mit der Bremse durch die Welt — bis ans Nilufer, wo die Geschichte ihr göttliches Ende findet.',
    body: 'Die Irrfahrt wird geographisch präzise — Bosporus (»Rinderfurt«, Aition für den Namen), Skythien, Ägypten. Am Nil fleht Io, zurückverwandelt zu werden; Juno lenkt ein. Die Verwandlung geschieht rückwärts, Glied für Glied, bis Io wieder Io ist — und zugleich zur Göttin Isis wird.',
  },
]

export default function Story() {
  return (
    <main className="px-5 pb-24 pt-20 md:px-10 md:pt-28">
      <section className="mx-auto max-w-5xl">
        <p className="font-sans text-xs uppercase tracking-[0.34em] text-[#8f2f1e]">Kapitel · Geschichte</p>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.95] text-[#1f1f1b] md:text-7xl">
          Die Geschichte einer Nymphe, die stumm wurde.
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-[#4f4942]">
          Sechs Abschnitte, 180 Hexameter, drei Metamorphosen: die Io-Erzählung in Ovids Met. I,
          568 – 747 — Schritt für Schritt entfaltet.
        </p>
        <Link
  to="/GesamteGeschichte"
  className="mt-6 inline-flex items-center border border-[#1f1f1b] bg-[#1f1f1b] px-5 py-3 font-sans text-xs uppercase tracking-[0.28em] text-[#fbfaf5] transition hover:bg-[#8f2f1e] hover:border-[#8f2f1e]"
>
  Gesamte Geschichte lesen →
</Link>
      </section>

      <section className="mx-auto mt-16 max-w-5xl border-t border-[#d8d0c3]">
        {sections.map((section) => (
          <article key={section.number} className="grid gap-8 border-b border-[#d8d0c3] py-10 lg:grid-cols-[0.25fr_0.75fr]">
            <div>
              <p className="font-serif text-4xl text-[#8f2f1e]">{section.number}</p>
            </div>
            <div>
              <h2 className="font-serif text-4xl leading-tight text-[#1f1f1b]">{section.title}</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#2f2a24]">{section.lead}</p>
              <p className="mt-6 max-w-3xl leading-8 text-[#62594f]">{section.body}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-14 max-w-5xl border border-[#d8d0c3] bg-[#eeebe3] p-8 md:p-10">
        <p className="font-sans text-xs uppercase tracking-[0.34em] text-[#8f2f1e]">Nächstes Kapitel</p>
        <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-4xl leading-tight text-[#1f1f1b]">Metamorphosen in der Zeit.</h2>
          <Link
            to="/metamorphosen"
            className="inline-flex border border-[#1f1f1b] bg-[#1f1f1b] px-5 py-4 font-sans text-xs uppercase tracking-[0.28em] text-[#fbfaf5] transition hover:border-[#8f2f1e] hover:bg-[#8f2f1e]"
          >
            Zur Zeitleiste
          </Link>
        </div>
      </section>
    </main>
  )
}
