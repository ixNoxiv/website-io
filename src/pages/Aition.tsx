import PageShell from '../components/PageShell'
import PanelGrid from '../components/PanelGrid'
import { aitionPanels } from '../data/site'
import AitionBlock from "../components/AitionBlock"
import ovidImage from "../assets/ovid-archive-1.avif"



export default function Aition() {
  return (
    <PageShell
      eyebrow="ORGIO · URSPRUNGSERKLÄRUNG"
      title="Aition."
      intro='Warum die Welt so ist.
      Ein »Aition« (αἴτιον, »Ursache«) erzählt, warum eine Sache, ein Ort oder ein Brauch so heißt oder existiert. Die Io-Erzählung liefert gleich drei aitiologische Pointen.'
    >
     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start my-16">
  
  {/* IMAGE */}
  <div className="overflow-hidden rounded-md">
    <img
      src={ovidImage}
      alt="Ovid Archive"
      className="w-full h-[420px] object-cover object-[20%_50%] grayscale hover:grayscale-0 hover:scale-105 transition duration-700"
    />
  </div>

  {/* TEXT */}
  <div className="max-w-3xl">
    <h2 className="text-xl tracking-widest uppercase text-stone-700 mb-4">
      Was ist ein Aition?
    </h2>

    <p className="text-stone-700 leading-relaxed">
      Die aitiologische Erzählung ist das Kernstück hellenistischer Dichtung —
      Kallimachos schrieb sogar ein ganzes Werk namens Aitia.
    </p>

    <p className="text-stone-700 leading-relaxed mt-4">
      Ovid erbt diese Technik und treibt sie weiter: in den Metamorphosen wird fast jede Verwandlung zugleich Ursprungsgeschichte.
    </p>
  </div>

</div>

      {/* GRID */}
      <div className="space-y-24">

        {/* α */}
        <AitionBlock
          symbol="α"
          title="Der Bosporus — »Rinderfurt«"
          text="Io überquert als Kuh den Meeresarm zwischen Europa und Asien. Der Name Βόσπορος wird so erzählend begründet. Ovid verbindet Geografie, Etymologie und Mythos."
          etymologie="βοῦς + πόρος"
          beleg="Rind + Furt/Übergang"
        />

        {/* β */}
        <AitionBlock
          symbol="β"
          title="Die Augen auf dem Pfauenschwanz"
          text="Juno setzt die Augen des Argus auf den Pfauenschwanz. Natur wird Mythos."
          beleg='»Excipit hos volucrisque suae Saturnia pennis collocat et gemmis caudam stellantibus implet.«'
        />

        {/* γ */}
        <AitionBlock
          symbol="γ"
          title="Isis — Griechisch trifft Ägyptisch"
          text="Io = Isis verbindet griechischen Mythos mit ägyptischem Kult. Ovid baut kulturelle Brücke."
          etymologie="Ἰώ ≙ Ἶσις"
          beleg="Die gehörnte Kuh wird zur gehörnten Göttin."
        />

      </div>
    </PageShell>
  )
}