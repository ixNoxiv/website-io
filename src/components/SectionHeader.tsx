type SectionHeaderProps = {
  eyebrow: string
  title: string
  children?: React.ReactNode
}

export default function SectionHeader({ eyebrow, title, children }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-sans text-xs uppercase tracking-[0.32em] text-[#8f2f1e]">{eyebrow}</p>
      <h1 className="mt-5 text-balance font-serif text-4xl leading-[0.98] text-[#2f2a24] md:text-7xl">{title}</h1>
      {children ? <div className="mt-6 text-lg leading-8 text-[#6f665b]">{children}</div> : null}
    </div>
  )
}
