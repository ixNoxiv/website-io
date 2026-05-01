import CharacterNetwork from '../components/CharacterNetwork'
import PageShell from '../components/PageShell'

export default function Characters() {
  return (
    <PageShell
      eyebrow="Personae"
      title="Charaktere"
      intro="Die Figurenübersicht folgt dem Referenzaufbau: links Auswahl, rechts Profil mit Motivation, Textfunktion und Beziehungen."
    >
      <CharacterNetwork />
    </PageShell>
  )
}
