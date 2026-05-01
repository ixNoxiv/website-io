import { NavLink, Outlet } from 'react-router-dom'
import { navItems } from '../data/site'

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-[#f7f4ed] text-[#1f1f1b]">
      <header className="sticky top-0 z-20 border-b border-[#d8d0c3] bg-[#f7f4ed]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 md:px-10">
          <div className="flex items-center justify-between gap-8">
            <NavLink to="/" className="font-serif text-2xl text-[#2f2a24]">
              Ovid · Io
            </NavLink>
            <p className="hidden font-sans text-[0.68rem] uppercase tracking-[0.28em] text-[#8a8074] sm:block">
              Latein Archiv
            </p>
          </div>
          <div className="scrollbar-hide flex gap-5 overflow-x-auto pb-1 font-sans text-[0.68rem] uppercase tracking-[0.2em] text-[#756b5f]">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `shrink-0 border-b pb-2 transition hover:text-[#8f2f1e] ${
                    isActive ? 'border-[#8f2f1e] text-[#8f2f1e]' : 'border-transparent'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
      <Outlet />
      <footer className="border-t border-[#d8d0c3] px-6 py-10 text-center font-sans text-xs uppercase tracking-[0.26em] text-[#8a8074]">
        Metamorphosen · Io · Ovid · Jonas Jocham
      </footer>
    </div>
  )
}
