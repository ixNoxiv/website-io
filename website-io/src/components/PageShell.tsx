import SectionHeader from './SectionHeader'

type PageShellProps = {
  eyebrow: string
  title: string
  intro: string
  children: React.ReactNode
}

export default function PageShell({ eyebrow, title, intro, children }: PageShellProps) {
  return (
    <main className="px-6 pb-24 pt-20 md:px-10 md:pt-28">
      <SectionHeader eyebrow={eyebrow} title={title}>
        <p>{intro}</p>
      </SectionHeader>
      <section className="mx-auto mt-16 max-w-6xl">{children}</section>
    </main>
  )
}
