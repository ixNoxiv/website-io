import { latinLines } from "../data/latinLines";
import { germanLines } from "../data/germanLines";

export default function GesamteGeschichte() {
  return (
    <main className="px-5 pb-24 pt-20 md:px-10 md:pt-28">
      
      {/* HEADER */}
      <section className="mx-auto max-w-6xl">
        <p className="font-sans text-xs uppercase tracking-[0.34em] text-[#8f2f1e]">
          Ovid · Metamorphosen · Io
        </p>

        <h1 className="mt-6 font-serif text-5xl leading-[0.95] text-[#1f1f1b] md:text-7xl">
          Lateinischer Text & Übersetzung
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4f4942]">
          Vollständige Parallelansicht (links Latein, rechts Deutsch).
        </p>
      </section>

      {/* TEXT GRID */}
      <section className="mx-auto mt-12 grid max-w-6xl gap-10 md:grid-cols-2">

        {/* LATIN */}
        <div className="border-r border-[#d8d0c3] pr-6">
          <h2 className="font-serif text-2xl text-[#8f2f1e] mb-6">
            Latein
          </h2>

          <div className="space-y-3 text-lg leading-9 text-[#2f2a24] font-serif font-medium whitespace-pre-wrap">
            {latinLines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>

        {/* GERMAN */}
        <div className="pl-6">
          <h2 className="font-serif text-2xl text-[#8f2f1e] mb-6">
            Deutsch
          </h2>

          <div className="space-y-3 text-lg leading-9 text-[#4f4942] font-medium whitespace-pre-wrap">
            {germanLines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}