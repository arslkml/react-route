import { NavLink, Outlet } from "react-router-dom"
import BreadCrumbs from "./BreadCrumbs"

export default function RootLayout() {
  
  return (
    <div>
      <header className={''}>
        <nav className={'flex gap-4 justify-end max-w-7xl mx-auto'}>
          <h2 className={'mr-auto border-b-2 border-pink-500'}>Arsal Kamil</h2>
          <ul className={'flex items-center gap-3'}>
            <NavLink to='/react-route/' className={'text-base p-1 rounded active:bg-pink-500 active:text-white font-semibold hover:text-pink-500 transition-all'}>Home</NavLink>
            <NavLink to='about' className={'text-base p-1 rounded active:bg-pink-500 active:text-white font-semibold hover:text-pink-500 transition-all'}>About</NavLink>
            <NavLink to='help' className={'text-base p-1 rounded active:bg-pink-500 active:text-white font-semibold hover:text-pink-500 transition-all'}>Help</NavLink>
            <NavLink to='careers' className={'text-base p-1 rounded active:bg-pink-500 active:text-white font-semibold hover:text-pink-500 transition-all'}>Careers</NavLink>
          </ul>
        </nav>
        <BreadCrumbs />
      </header>

      <main className={'max-w-7xl my-10 mx-auto '}>
        <Outlet />
      </main>
    </div>
  )
}
