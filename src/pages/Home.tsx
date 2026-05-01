import heroImage from '../assets/hero.png'
import archiveOne from '../assets/ovid-archive-1.avif'
import archiveTwo from '../assets/ovid-archive-2.avif'
import archiveThree from '../assets/ovid-archive-3.avif'

import EditorialImage from '../components/EditorialImage'
import PreviewCard from '../components/PreviewCard'
import { characters, navItems, storySteps } from '../data/site'

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#d8d0c3] bg-[#fbfaf5] px-5 pb-16 pt-24 md:px-10 md:pt-32">
        <div className="absolute inset-0 opacity-[0.10]">
          <img
            src={heroImage}
            alt=""
            className="h-full w-full object-cover grayscale transition duration-700"
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.35em] text-[#8f2f1e]">
              Ovid · Metamorphosen · Io
            </p>

            <h1 className="mt-7 max-w-5xl font-serif text-4xl leading-[0.95] tracking-tight text-[#2f2a24] sm:text-6xl md:text-8xl">
              Verwandlung als Macht, Sprache und Erinnerung.
            </h1>
          </div>

          <div className="max-w-xl border-l border-[#cdbda8] pl-7">
            <p className="text-lg leading-8 text-[#675f55]">
              Eine helle, ruhige Lernwebsite für die Io-Episode: lateinischer Text,
              deutsche Deutung, Figurenlogik und Abitur-Perspektiven in einem klaren Archivsystem.
            </p>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-4 border-y border-[#d8c8b5] py-6 text-center">
              <div>
                <p className="font-serif text-3xl text-[#2f2a24]">180</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-[#8a8074]">Verse</p>
              </div>

              <div className="border-x border-[#d8c8b5]">
                <p className="font-serif text-3xl text-[#2f2a24]">3</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-[#8a8074]">Metamorphosen</p>
              </div>

              <div className="border-r border-[#d8c8b5]">
                <p className="font-serif text-3xl text-[#2f2a24]">{characters.length}</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-[#8a8074]">Figuren</p>
              </div>

              <div>
                <p className="font-serif text-3xl text-[#2f2a24]">1</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-[#8a8074]">Binnenerzählung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INCIPIT */}
      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.2fr] items-start">

          {/* IMAGE */}
          <div className="overflow-hidden border border-[#d8d0c3] bg-[#f4f1ea]">
            <img
              src={archiveThree}
              alt="Ovid Archiv"
              className="h-full w-full object-cover grayscale hover:grayscale-0 transition duration-700"
            />
          </div>

          {/* TEXT */}
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.32em] text-[#8f2f1e]">
              Incipit
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#2f2a24] text-center">
              Viderat a patrio redeuntem Iuppiter illam<br />
              flumine, et "o virgo Iove digna" … dixit.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#675f55] text-center">
              Jupiter hatte sie gesehen, als sie vom väterlichen Fluss zurückkehrte —
              und sprach: »O Jungfrau, Jupiters würdig«.
            </p>

            <p className="mt-4 text-sm uppercase tracking-[0.28em] text-[#8a8074] text-center">
              Ovid · Met. I, 588 ff.
            </p>
          </div>
        </div>
      </section>

      {/* NAV CARDS */}
      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.32em] text-[#8f2f1e]">Kapitel</p>
            <h2 className="mt-5 font-serif text-5xl leading-none text-[#2f2a24]">
              Lernen in klaren Stationen.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {navItems.map((item) => (
              <PreviewCard
                key={item.path}
                eyebrow={item.eyebrow}
                title={item.label}
                description={item.description}
                to={item.path}
              />
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="border-t border-[#d8d0c3] bg-[#f4f1ea] px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="font-sans text-xs uppercase tracking-[0.32em] text-[#8f2f1e]">
            Erzählbogen
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {storySteps.map((step) => (
              <article key={step.number} className="border-t border-[#bca98f] pt-5">
                <p className="font-serif text-4xl text-[#8f2f1e]">{step.number}</p>
                <h3 className="mt-4 font-serif text-3xl text-[#2f2a24]">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#62594f]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHIV */}
      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="font-sans text-xs uppercase tracking-[0.32em] text-[#8f2f1e]">
            Archivbilder
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <EditorialImage src={archiveOne} label="Fig. I · Landschaft und Verhüllung" />
            <EditorialImage src={archiveTwo} label="Fig. II · Mythos und Körper" />
            <EditorialImage src={archiveThree} label="Fig. III · Zeichen und Erinnerung" />
          </div>
        </div>
      </section>

    </main>
  )
}