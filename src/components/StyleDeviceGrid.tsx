import { styleDevices } from '../data/site'

export default function StyleDeviceGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {styleDevices.map((device) => (
        <article key={device.name} className="group border border-[#d8d0c3] bg-[#fbfaf5] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#8f2f1e] hover:bg-[#eeebe3]">
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-[#8f2f1e]">{device.name}</p>
          <blockquote className="mt-5 font-serif text-3xl leading-tight text-[#2f2a24]">{device.latin}</blockquote>
          <p className="mt-6 leading-8 text-[#62594f]">{device.explanation}</p>
          <p className="mt-6 border-t border-[#d8d0c3] pt-5 text-sm leading-7 text-[#8f2f1e]">{device.examHint}</p>
        </article>
      ))}
    </div>
  )
}
