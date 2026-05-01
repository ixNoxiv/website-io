import PageShell from '../components/PageShell'
import TransformationExplorer from '../components/TransformationExplorer'

export default function Metamorphoses() {
  return (
    <PageShell
      eyebrow="Zeitleiste · Die sieben Phasen"
      title="Metamorphosen in der Zeit."
      intro="Io · Syrinx · Argus — drei Verwandlungen, verschachtelt in sieben dramatischen Phasen. Klicke eine Station an, um die lateinische Signatur und die Verwandlung zu sehen."
    >
      <TransformationExplorer />
    </PageShell>
  )
}
