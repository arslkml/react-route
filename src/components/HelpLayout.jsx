import { NavLink, Outlet } from "react-router-dom"

export default function HelpLayout() {
  return (
    <div>
        <h2>Website Help</h2>
        <p>Lorem impsum dolor sit amet consectur adpisicing elit. Dolorum, earum!</p>

        <nav className={'flex justify-center gap-7 my-7'}>
            <NavLink to='faq' className={'p-3 border-white border-2 transition-all hover:border-pink-500 active:bg-pink-500'}>View the FAQ</NavLink>
            <NavLink to='contact' className={'p-3 border-white border-2 transition-all hover:border-pink-500 active:bg-pink-500'}>Contact Us</NavLink>
        </nav>

        <Outlet />

    </div>
  )
}
