type EditorialImageProps = {
  src: string
  label: string
}

export default function EditorialImage({ src, label }: EditorialImageProps) {
  return (
    <figure className="group overflow-hidden border border-[#d8d0c3] bg-[#fbfaf5]">
      <img
        src={src}
        alt=""
        className="aspect-[4/3] w-full object-cover grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
      />
      <figcaption className="border-t border-[#d8d0c3] px-5 py-4 font-sans text-[0.68rem] uppercase tracking-[0.28em] text-[#4f4942] transition group-hover:text-[#8f2f1e]">
        {label}
      </figcaption>
    </figure>
  )
}
