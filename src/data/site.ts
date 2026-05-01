export type NavItem = {
  label: string
  path: string
  eyebrow: string
  description: string
}

export type TextPassage = {
  id: string
  latin: string
  german: string
  focus: string
  device: string
  note: string
}

export type TextSection = {
  id: string
  label: string
  range: string
  passages: TextPassage[]
}

export type Character = {
  id: string
  name: string
  role: string
  motive: string
  function: string
  relations: Array<{ target: string; label: string }>
}

export type Transformation = {
  id: string
  phase: string
  title: string
  location: string
  before: string
  after: string
  meaning: string
  quote: string
}

export type StyleDevice = {
  name: string
  latin: string
  explanation: string
  examHint: string
}

export type ContentPanel = {
  kicker: string
  title: string
  text: string
  quote?: string
}

export const navItems: NavItem[] = [
  { label: 'Geschichte', path: '/geschichte', eyebrow: 'Narratio', description: 'Io-Erzählung, lateinische Schlüsselstellen und deutsche Deutung.' },
  { label: 'Metamorphosen', path: '/metamorphosen', eyebrow: 'Mutatio', description: 'Verwandlungen als Machtzeichen, Textstruktur und Deutungsprinzip.' },
  { label: 'Charaktere', path: '/charaktere', eyebrow: 'Personae', description: 'Figuren, Motive, Beziehungen und Konflikte im interaktiven Überblick.' },
  { label: 'Text-Viewer', path: '/text-viewer', eyebrow: 'Textus', description: 'Latein und Deutsch parallel mit Analysemarkierungen.' },
  { label: 'Stilistik', path: '/stilistik', eyebrow: 'Ars', description: 'Stilmittel mit Beispielen und Abitur-Deutung.' },
  { label: 'Poeta Doctus', path: '/poeta-doctus', eyebrow: 'Poesis', description: 'Ovids gelehrtes Spiel, Meta-Ebene und dichterisches Selbstbewusstsein.' },
  { label: 'Aition', path: '/aition', eyebrow: 'Origo', description: 'Ursprungsmythen: Pfauenfedern, Isis-Kult und Kuh-Verwandlung.' },
]

export const textSections: TextSection[] = [
  {
    id: 'entfuehrung',
    label: 'Die Entführung',
    range: 'Met. I, 588-600',
    passages: [
      {
        id: 'redeuntem',
        latin: "Viderat a patrio redeuntem Iuppiter illam flumine, et 'O virgo Iove digna' dixit.",
        german: 'Jupiter hatte sie gesehen, wie sie vom väterlichen Flusse zurückkehrte, und sprach: »O Jungfrau, Jupiters würdig«.',
        focus: 'redeuntem ... flumine',
        device: 'Hyperbaton',
        note: 'Die gespreizte Wortstellung zieht Ios Rückkehr aus der Ordnung heraus: Aus Heimkehr wird Bedrohung.',
      },
      {
        id: 'tenuit',
        latin: 'Tenuit fugientem, rapuitque pudorem.',
        german: 'Er hielt die Fliehende fest und raubte ihre Keuschheit.',
        focus: 'Tenuit ... fugientem ... rapuitque',
        device: 'Alliteration',
        note: 'Die gedrängte Abfolge der Verben macht die Gewalt abrupt und unausweichlich.',
      },
      {
        id: 'nebulas',
        latin: 'Interea medios Iuno despexit in agros et noctis faciem nebulas fecisse volucres.',
        german: 'Indessen blickte Juno hinab mitten auf die Felder und wunderte sich, dass flüchtige Wolken eine Nachtgestalt erzeugt hatten.',
        focus: 'nebulas ... volucres',
        device: 'Metapher',
        note: 'Die Wolke funktioniert als Chiffre moralischer Vertuschung: Jupiter verdunkelt die Welt, um seine Gewalt zu verbergen.',
      },
      {
        id: 'die',
        latin: 'Sub nitido mirata die, non fluminis illas esse.',
        german: 'Unter strahlendem Tag spürte sie, dass sie nicht vom Fluss kamen.',
        focus: 'die ... fluminis',
        device: 'Chiasmus',
        note: 'Die Gegenüberstellung von Tag und Fluss ordnet Junos Verdacht: Naturerscheinung wird zur Spur des Betrugs.',
      },
    ],
  },
  {
    id: 'inachus',
    label: 'Inachus erkennt seine Tochter',
    range: 'Met. I, 649-655',
    passages: [
      {
        id: 'littera',
        latin: 'Littera pro verbis, quam pes in pulvere duxit.',
        german: 'Ein Buchstabe statt Worten, den der Huf in den Staub zog.',
        focus: 'verbis ... pes',
        device: 'Chiasmus',
        note: 'Schrift ersetzt Stimme. Io kann sich mitteilen, aber nur in einer gebrochenen, körperlich erniedrigten Form.',
      },
      {
        id: 'corporis',
        latin: 'Corporis indicium mutati triste peregit.',
        german: 'Er vollendete das traurige Zeugnis des verwandelten Körpers.',
        focus: 'corporis ... mutati',
        device: 'Hyperbaton',
        note: 'Die Wortstellung trennt Körper und Veränderung und spiegelt so Ios gespaltene Identität.',
      },
      {
        id: 'me-miserum',
        latin: "'Me miserum!' exclamat pater Inachus et gemens 'me miserum!'",
        german: '»Ich Unglücklicher!«, ruft der Vater Inachus und seufzend: »Ich Unglücklicher!«',
        focus: 'Me miserum ... me miserum',
        device: 'Anapher',
        note: 'Die Wiederholung macht die Szene klagend und rituell: Inachus erkennt nicht nur Io, sondern das Ausmaß ihres Verlusts.',
      },
    ],
  },
]

export const textPassages: TextPassage[] = textSections.flatMap((section) => section.passages)

export const storySteps = [
  { number: 'I', title: 'Tempe und Inachus', text: 'Die Flussgötter versammeln sich bei Peneus; nur Inachus fehlt, weil er um seine Tochter Io trauert.' },
  { number: 'II', title: 'Entführung', text: 'Jupiter sieht Io, lockt sie in den Schatten und verhüllt die Landschaft durch Nebel.' },
  { number: 'III', title: 'Verwandlung', text: 'Aus Angst vor Juno verwandelt Jupiter Io in eine Kuh und lügt über ihre Herkunft.' },
  { number: 'IV', title: 'Argus und Aition', text: 'Juno setzt Argus als Wächter ein; Mercurius tötet ihn, und seine Augen werden zu Pfauenfedern.' },
]

export const transformations: Transformation[] = [
  { id: 'argos', phase: 'I', title: "Inachus' Tochter", location: 'Argos, am Fluss', before: 'Io ist abwesend, aber im Schmerz des Vaters gegenwärtig.', after: 'Die Erzählung öffnet sich über Verlust, Suche und Ungewissheit.', meaning: 'Die erste Phase etabliert Io als Leerstelle: Noch bevor sie auftritt, wird sie Objekt von Trauer und Sehnsucht.', quote: 'Inachus unus abest' },
  { id: 'lerna', phase: 'II', title: 'Die Begegnung', location: 'Wälder bei Lerna', before: 'Io kehrt vom väterlichen Fluss zurück.', after: 'Jupiters Anrede verwandelt Begegnung in Zugriff.', meaning: 'Die höfische Sprache der Werbung kippt in Herrschaft. Der Ort wird zur Schwelle zwischen Alltag und Gewalt.', quote: 'o virgo Iove digna' },
  { id: 'wolken', phase: 'III', title: 'Vergewaltigung unter Wolken', location: 'eingedunkelter Hain', before: 'Io flieht vor Jupiter.', after: 'Jupiter verhüllt die Erde und raubt Ios Keuschheit.', meaning: 'Die Wolke ist keine Naturstimmung, sondern ein Instrument der Vertuschung. Ovid verdichtet die Gewalt in einem schnellen Vers.', quote: 'tenuit fugientem rapuitque pudorem' },
  { id: 'kuh', phase: 'IV', title: 'Verwandlung in die Kuh', location: 'Lerna', before: 'Io ist Nymphe mit menschlicher Stimme und Gestalt.', after: 'Io wird zur weißen Färse, innerlich Mensch, äußerlich Tier.', meaning: 'Die Metamorphose schützt Jupiter, zerstört aber Ios Ausdruck. Ihr Körper wird zum Versteck seiner Schuld.', quote: 'Inachidos vultus mutaverat ille iuvencam' },
  { id: 'argus', phase: 'V', title: 'Argus — Hundertäugige Wache', location: 'mykenische Weide', before: 'Io ist verwandelt, aber noch nicht frei.', after: 'Argus macht sie zum überwachten Körper.', meaning: 'Die hundert Augen personifizieren Kontrolle. Io kann nicht entkommen, weil sie selbst im Wegsehen gesehen bleibt.', quote: 'Centum luminibus cinctum caput Argus habebat' },
  { id: 'syrinx', phase: 'VI', title: 'Mercur, Flöte, Syrinx', location: 'Weideplatz', before: 'Argus wacht; Mercur nähert sich als Hirte.', after: 'Die Syrinx-Erzählung schläfert Argus ein und führt zu seinem Tod.', meaning: 'Ovid verschachtelt eine zweite Verfolgungs-Verwandlungs-Geschichte in die erste. Erzählen selbst wird zur Macht.', quote: 'euntem multa loquendo detinuit sermone diem' },
  { id: 'nil', phase: 'VII', title: 'Rückverwandlung · Isis', location: 'Ufer des Nils', before: 'Io irrt durch die Welt, gehetzt von Junos Rache.', after: 'Sie erhält ihre frühere Gestalt zurück und wird kultisch mit Isis verbunden.', meaning: 'Die Rückverwandlung läuft Glied für Glied rückwärts. Aus Leid wird Ursprungserzählung, aus Io eine göttliche Figur.', quote: 'fitque, quod ante fuit' },
]

export const characters: Character[] = [
  { id: 'io', name: 'Io', role: 'Protagonistin, Nymphe', motive: 'Inachis', function: 'Junge Flussnymphe von ausgesuchter Schönheit. Jupiter erblickt sie, vergewaltigt sie und verwandelt sie aus Furcht vor Juno in eine weiße Kuh. Ihre Leidensgeschichte bildet das Zentrum der Erzählung.', relations: [
    { target: 'Jupiter', label: 'vergewaltigt von' }, { target: 'Juno', label: 'wird bestraft von' }, { target: 'Inachus', label: 'Tochter von' }, { target: 'Argus', label: 'bewacht von' }, { target: 'Mercurius', label: 'befreit von' }, { target: 'Isis', label: 'wird zu' },
  ] },
  { id: 'jupiter', name: 'Jupiter', role: 'Göttervater, Täter', motive: 'Begierde und Verdeckung', function: 'Er erzeugt die Krise, manipuliert Natur und Sprache und versucht, seine Tat vor Juno zu verbergen.', relations: [
    { target: 'Io', label: 'verwandelt' }, { target: 'Juno', label: 'täuscht' }, { target: 'Mercurius', label: 'beauftragt' },
  ] },
  { id: 'juno', name: 'Juno', role: 'Eifersüchtige Göttin', motive: 'Kontrolle und Vergeltung', function: 'Sie erkennt den Betrug, fordert Io als Geschenk und verlängert Jupiters Gewalt durch Überwachung.', relations: [
    { target: 'Io', label: 'bestraft' }, { target: 'Argus', label: 'setzt ein' }, { target: 'Pfau', label: 'stiftet Zeichen im' },
  ] },
  { id: 'argus', name: 'Argus', role: 'Allsehender Wächter', motive: 'Pflicht und Aufmerksamkeit', function: 'Argus verkörpert totale Kontrolle: Selbst abgewandt behält er Io vor Augen.', relations: [
    { target: 'Io', label: 'bewacht' }, { target: 'Juno', label: 'dient' }, { target: 'Mercurius', label: 'wird getötet von' }, { target: 'Pfau', label: 'wird Zeichen im' },
  ] },
  { id: 'merkur', name: 'Mercurius', role: 'Bote, List und Erzählung', motive: 'Auftrag Jupiters', function: 'Er besiegt Argus durch Musik, Rede und den Binnenmythos von Syrinx.', relations: [
    { target: 'Argus', label: 'schläfert ein' }, { target: 'Io', label: 'befreit' }, { target: 'Syrinx', label: 'erzählt von' }, { target: 'Pan', label: 'erzählt von' },
  ] },
  { id: 'inachus', name: 'Inachus', role: 'Vater, Flussgott', motive: 'Trauer und Wiedererkennung', function: 'Seine Klage macht Ios Leid familiär konkret; er erkennt sie durch die Schrift im Staub.', relations: [
    { target: 'Io', label: 'erkennt als Tochter' }, { target: 'Peneus', label: 'fehlt bei Versammlung des' },
  ] },
  { id: 'peneus', name: 'Peneus', role: 'Flussgott von Tempe', motive: 'Ordnung der Flüsse', function: 'Peneus eröffnet den Rahmen der Flussgötterversammlung und kontrastiert Inachus’ Abwesenheit.', relations: [
    { target: 'Inachus', label: 'vermisst' }, { target: 'Naiaden', label: 'umgeben von' },
  ] },
  { id: 'naiaden', name: 'Naiaden', role: 'Wassernymphen', motive: 'Familie und Umgebung Ios', function: 'Sie berühren Io, erkennen sie aber nicht; dadurch wird die Entfremdung verschärft.', relations: [
    { target: 'Io', label: 'erkennen nicht' }, { target: 'Inachus', label: 'begleiten' },
  ] },
  { id: 'syrinx', name: 'Syrinx', role: 'Nymphe, Binnenmythos', motive: 'Flucht vor Pan', function: 'Ihre Geschichte spiegelt Ios Verfolgung und dient Mercurius als Einschlafstrategie.', relations: [
    { target: 'Pan', label: 'flieht vor' }, { target: 'Diana', label: 'verehrt' }, { target: 'Mercurius', label: 'erzählt durch' },
  ] },
  { id: 'pan', name: 'Pan', role: 'Hirtengott', motive: 'Begehren', function: 'Pan wiederholt im Binnenmythos das Muster männlicher Verfolgung.', relations: [
    { target: 'Syrinx', label: 'verfolgt' }, { target: 'Mercurius', label: 'Stoff für Erzählung' },
  ] },
  { id: 'diana', name: 'Diana', role: 'Göttin der Jungfräulichkeit', motive: 'Vorbild der Syrinx', function: 'Diana markiert Syrinx’ Selbstverständnis und macht Pans Zugriff als Grenzverletzung lesbar.', relations: [
    { target: 'Syrinx', label: 'Vorbild für' },
  ] },
  { id: 'nil', name: 'Nil', role: 'Endpunkt der Irrfahrt', motive: 'Erlösung und Grenze', function: 'Am Nil bittet Io um ein Ende ihres Leidens; hier beginnt die aitiologische Öffnung zu Isis.', relations: [
    { target: 'Io', label: 'nimmt Klage auf' }, { target: 'Isis', label: 'führt zu' },
  ] },
  { id: 'erinys', name: 'Erinys', role: 'Rachegeist', motive: 'Junos Strafe', function: 'Die Erinys treibt Io nach Argus’ Tod weiter durch die Welt.', relations: [
    { target: 'Juno', label: 'gesandt von' }, { target: 'Io', label: 'verfolgt' },
  ] },
  { id: 'isis', name: 'Isis', role: 'Göttliche Verwandlung', motive: 'Sakrale Ordnung', function: 'Isis gibt der leidvollen Episode eine aitiologische Zielrichtung.', relations: [
    { target: 'Io', label: 'spätere Deutung von' }, { target: 'Nil', label: 'verbunden mit' },
  ] },
  { id: 'pfau', name: 'Pfau', role: 'Aitiologisches Zeichen', motive: 'Erinnerung', function: 'Der Pfau bewahrt Argus’ Augen und verwandelt Überwachung in sichtbare Schönheit.', relations: [
    { target: 'Argus', label: 'trägt Augen des' }, { target: 'Juno', label: 'gehört zu' },
  ] },
]

export const metamorphosisPanels: ContentPanel[] = [
  { kicker: 'Corpus', title: 'Io: Mensch zu Kuh', text: 'Die äußere Gestalt wird tierisch, das Bewusstsein bleibt menschlich. Daraus entsteht der zentrale Schmerz der Episode.', quote: 'Inachidos vultus mutaverat ille iuvencam' },
  { kicker: 'Vox', title: 'Sprache zu Schrift', text: 'Io verliert Stimme und Artikulation. Der Huf im Staub ersetzt das gesprochene Wort und macht Identität lesbar.', quote: 'littera pro verbis' },
  { kicker: 'Oculi', title: 'Argus: Wächter zu Zeichen', text: 'Nach Argus’ Tod werden seine Augen zum Pfauenschmuck. Kontrolle wird ästhetisch konserviert.', quote: 'gemmis caudam stellantibus implet' },
  { kicker: 'Cultus', title: 'Io zu Isis', text: 'Die Rückverwandlung öffnet den Mythos in sakrale und aitiologische Bedeutung.', quote: 'timide verba intermissa retemptat' },
]

export const poetaDoctusPanels: ContentPanel[] = [
  {
    kicker: 'I',
    title: 'Gelehrte Anspielung',
    text:
      'Ovid verdichtet den Mythos durch Namen, Orte und Kulte, die der gebildete Leser als Chiffren erkennt: »Lerna«, »Mycenae«, »Inachus« sind keine bloßen Orte — sie rufen literarische Traditionen auf (Kallimachos, Hesiod, die tragische Bühne).',
  },
  {
    kicker: 'II',
    title: 'Binnenerzählung (mise en abyme)',
    text:
      'Die Syrinx-Episode ist nicht Dekoration, sondern meta-literarisches Spiel: Mercur erzählt sie, um Argus einzuschläfern. Das heißt: Erzählen selbst tötet. Ovid reflektiert in der Binnengeschichte über Macht und Gefahr des Erzählens.',
  },
  {
    kicker: 'III',
    title: 'Synkretismus & Geographie',
    text:
      'Die Gleichsetzung Io = Isis verlangt kulturübergreifende Bildung. Ovid vereint griechischen Mythos mit ägyptischem Kult — ein programmatischer Akt: Dichtung als Brücke zwischen Traditionen.',
  },
  {
    kicker: 'IV',
    title: 'Etymologien & Aitien',
    text:
      'Der »Bosporus« als »Rinderfurt«, die Augen auf dem Pfauenschwanz, der Isis-Kult: Ovid liefert dreifach die Herkunftserklärung. Der poeta doctus ist immer auch Etymologe.',
  },
  {
    kicker: 'V',
    title: 'Intertextualität',
    text:
      'Anklänge an Kallimachos’ Aitia, Apollonios’ Argonautika, die attische Tragödie (Aischylos, Prometheus), aber auch an Vergils Aeneis — Io wird zum Kreuzungspunkt der literarischen Gedächtnislandschaft.',
  },
  {
    kicker: 'VI',
    title: 'Spielerische Ironie',
    text:
      'Der gelehrte Dichter ist nie bloß feierlich. Ovid spielt mit Erwartungen: die Göttergewalt wird entpathetisiert, die pathetische Klage Inachus’ (›me miserum!‹) zugleich zitiert und leicht distanziert. Ironie ist selbst Bildungsgestus.',
  },
]

export const aitionPanels: ContentPanel[] = [
  { kicker: 'Pfau', title: 'Die Augen des Argus', text: 'Juno bewahrt Argus’ Augen im Gefieder ihres Vogels. So erklärt der Mythos die sternartigen Pfauenfedern.', quote: 'centumque oculos nox occupat una' },
  { kicker: 'Nil', title: 'Io am Nil', text: 'Der Nil markiert das Ende der weltweiten Irrfahrt. Aus dem Weg der Verfolgten wird eine geografisch-kultische Spur.' },
  { kicker: 'Isis', title: 'Kultische Umdeutung', text: 'Die spätere Identifikation mit Isis verwandelt individuelles Leid in religiöse Ordnung.', quote: 'fitque, quod ante fuit' },
]

export const styleDevices: StyleDevice[] = [
  { name: 'Alliteration', latin: 'Tenuit fugientem, rapuitque pudorem', explanation: 'Die lautliche und syntaktische Verdichtung macht Jupiters Zugriff abrupt.', examHint: 'Nutze die Stelle für Gewalt, Tempo und Machtasymmetrie.' },
  { name: 'Chiasmus', latin: 'Littera pro verbis ... pes in pulvere', explanation: 'Schrift und Körper kreuzen sich: Der Huf ersetzt die Stimme.', examHint: 'Sehr stark für Identität, Entmenschlichung und Kommunikation.' },
  { name: 'Hyperbaton', latin: 'redeuntem ... flumine', explanation: 'Die Trennung der Wörter spiegelt die gestörte Heimkehr Ios.', examHint: 'Gut geeignet für formale Analyse mit inhaltlicher Deutung.' },
  { name: 'Anapher', latin: 'Me miserum ... me miserum', explanation: 'Die Wiederholung verstärkt Inachus’ Klage und macht Erkenntnis zur Trauerszene.', examHint: 'Deute sie als Affektsteigerung und familiären Schmerz.' },
  { name: 'Metapher', latin: 'nebulas ... volucres', explanation: 'Die Wolken stehen für moralische Vertuschung und göttliche Manipulation.', examHint: 'Verbinde Naturbild und Schuldverschleierung.' },
]
