const rhetoricalFigures = [
  {
    number: '01',
    name: 'Alliteration',
    latin: 'tenuit fugientem rapuitque pudorem',
    german: 'er hielt die Fliehende fest und raubte ihre Keuschheit',
    note: 'Häufung der harten Anlaute (t-, r-, p-) verdichtet die Gewalt rhythmisch und lautmalend.',
  },
  {
    number: '02',
    name: 'Chiasmus',
    latin: 'bos quoque formosa est — formosa puella fuit',
    german: 'auch als Kuh ist sie schön — schön war das Mädchen',
    note: 'Die Kreuzstellung (A-B / B-A) spiegelt die Verwandlung selbst — Form bleibt, Gestalt kehrt sich um.',
  },
  {
    number: '03',
    name: 'Hyperbaton',
    latin: 'centum luminibus cinctum caput Argus habebat',
    german: 'hundert Augen umringten das Haupt, das Argus trug',
    note: 'Das Sperren von »centum … caput« ahmt die Ausdehnung der hundert Augen visuell im Satz nach.',
  },
  {
    number: '04',
    name: 'Anapher',
    latin: 'me miserum! … me miserum!',
    german: 'ich Unglücklicher! … ich Unglücklicher!',
    note: "Die Wiederholung in Inachus' Klage intensiviert den Affekt; typisch ovidisch-deklamatorisch.",
  },
  {
    number: '05',
    name: 'Metapher',
    latin: 'inducta … nebula',
    german: 'herbeigezogene Wolke',
    note: 'Die Wolke als Bild der Vertuschung: Naturphänomen wird zur moralischen Kategorie.',
  },
  {
    number: '06',
    name: 'Enallage',
    latin: 'pavidae ... iuvencae',
    german: 'der furchtsamen Färse (Attribut gehört semantisch zur Seele)',
    note: 'Das Adjektiv wandert vom erwarteten Bezug (Io, Person) auf das Tier — Form und Inhalt fallen auseinander.',
  },
  {
    number: '07',
    name: 'Polysyndeton',
    latin: 'et timuit ... et territa ... et conata',
    german: 'und fürchtete ... und erschrak ... und versuchte',
    note: 'Die Häufung von »et« dehnt die Zeit, das Entsetzen wird in lauter kurze Akte zerlegt.',
  },
]

const grammarNotes = [
  {
    number: '01',
    title: 'Historisches Präsens',
    example: 'exclamat — statt exclamavit',
    text: 'Ovid wechselt häufig zwischen Perfekt und historischem Präsens. Das Präsens vergegenwärtigt den erzählten Moment — der Leser wird zum Zeugen.',
  },
  {
    number: '02',
    title: 'Apo koinou',
    example: "et gemens 'me miserum' (gemens gehört zu exclamat und 'me miserum')",
    text: 'Ein einziges Wort bezieht sich syntaktisch auf zwei Satzteile — verdichtet die Szene ökonomisch.',
  },
  {
    number: '03',
    title: 'Participium coniunctum',
    example: 'fugientem (rapuit)',
    text: 'Das Partizip verbindet zwei Handlungen zu einer einzigen Bewegung — »die Fliehende raubte er«: Flucht und Ergreifen fallen in einen Moment zusammen.',
  },
  {
    number: '04',
    title: 'Ablativus absolutus',
    example: 'luminibus clausis',
    text: 'Temporale/kausale Kürzung: »als die Augen geschlossen waren«. Ovid nutzt den AblAbs oft szenisch-filmisch.',
  },
  {
    number: '05',
    title: 'Prosopopoiia der Landschaft',
    example: 'Inachus … maestus, demissus in undas',
    text: 'Der Fluss selbst ist personifiziert, weint, senkt sich. Die Natur reagiert affektiv — ein Ovidsches Signum.',
  },
  {
    number: '06',
    title: 'Hexameter · Metrum',
    example: '— ⏑⏑ | — ⏑⏑ | — — | — — | — ⏑⏑ | — ⏓',
    text: 'Daktylischer Hexameter mit sechs Versfüßen, die fünfte Hebung meist daktylisch, die sechste zweisilbig. Der Rhythmus trägt Pathos und Pausen.',
  },
]

export default function Stilistik() {
  return (
    <main className="px-5 pb-24 pt-20 md:px-10 md:pt-28">
      <section className="mx-auto max-w-5xl">
        <p className="font-sans text-xs uppercase tracking-[0.34em] text-[#8f2f1e]">Grammatik · Stilistik</p>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.95] text-[#1f1f1b] md:text-7xl">
          Die Figuren der Sprache.
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-[#4f4942]">
          Ovids Sprache ist ein Instrument der Verwandlung: jede rhetorische Figur modelliert den
          Stoff — sie zerlegt, spiegelt, intensiviert.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <p className="font-sans text-xs uppercase tracking-[0.34em] text-[#8f2f1e]">Rhetorische Figuren</p>
        <div className="mt-8 divide-y divide-[#d8d0c3] border-y border-[#d8d0c3]">
          {rhetoricalFigures.map((figure) => (
            <article key={figure.number} className="grid gap-7 py-8 lg:grid-cols-[0.15fr_0.85fr]">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#8f2f1e]">{figure.number}</p>
              <div>
                <h2 className="font-serif text-4xl leading-tight text-[#1f1f1b]">{figure.name}</h2>
                <p className="mt-4 inline border-b border-[#c0602e] bg-[#ead2c4] px-1 font-serif text-2xl leading-10 text-[#1f1f1b]">
                  {figure.latin}
                </p>
                <p className="mt-4 text-lg leading-8 text-[#4f4942]">{figure.german}</p>
                <p className="mt-4 max-w-3xl leading-8 text-[#62594f]">{figure.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <div className="max-w-3xl">
          <p className="font-sans text-xs uppercase tracking-[0.34em] text-[#8f2f1e]">Grammatische Besonderheiten</p>
          <h2 className="mt-5 font-serif text-5xl leading-none text-[#1f1f1b]">Was an Ovids Satzbau auffällt.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {grammarNotes.map((item) => (
            <article key={item.number} className="border border-[#d8d0c3] bg-[#fbfaf5] p-7 transition hover:border-[#c0602e] hover:bg-[#eeebe3]">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#c0602e]">{item.number}</p>
              <h3 className="mt-5 font-serif text-3xl leading-tight text-[#1f1f1b]">{item.title}</h3>
              <p className="mt-5 font-sans text-xs uppercase tracking-[0.24em] text-[#4f4942]">Beispiel</p>
              <p className="mt-2 font-serif text-2xl italic leading-tight text-[#2f2a24]">{item.example}</p>
              <p className="mt-5 leading-8 text-[#62594f]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
