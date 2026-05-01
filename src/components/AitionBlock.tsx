export default function AitionBlock({
  symbol,
  title,
  text,
  etymologie,
  beleg,
}: {
  symbol: string
  title: string
  text: string
  etymologie?: string
  beleg?: string
}) {
  return (
    <div className="border-l-2 border-stone-700 pl-6">

      <div className="text-2xl text-stone-500">{symbol}</div>

      <h3 className="text-xl font-semibold text-stone-800 mt-2">
        {title}
      </h3>

      <p className="mt-2 text-stone-700 leading-relaxed">
        {text}
      </p>

      {/* MINI BOXES */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">

        {etymologie && (
          <div className="border border-stone-300 bg-stone-50 p-3 rounded-md">
            <p className="text-xs uppercase tracking-widest text-stone-500">
              Etymologie
            </p>
            <p className="text-sm text-stone-700">
              {etymologie}
            </p>
          </div>
        )}

        {beleg && (
          <div className="border border-stone-300 bg-stone-50 p-3 rounded-md">
            <p className="text-xs uppercase tracking-widest text-stone-500">
              Beleg
            </p>
            <p className="text-sm italic text-stone-700">
              {beleg}
            </p>
          </div>
        )}

      </div>

    </div>
  )
}