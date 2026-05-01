import InteractiveTextViewer from '../components/InteractiveTextViewer'
import PageShell from '../components/PageShell'

export default function TextViewer() {
  return (
    <PageShell
      eyebrow="Textus"
      title="Text-Viewer"
      intro="Latein und Deutsch stehen parallel. Markierte Stellen öffnen eine kurze Analyse zu Stilmittel, Funktion und Klausurwert."
    >
      <InteractiveTextViewer />
    </PageShell>
  )
}
