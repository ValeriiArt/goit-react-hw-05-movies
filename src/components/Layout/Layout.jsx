import { NavLink, Outlet } from "react-router-dom";
import s from './Layout.module.css'


const Layout = () => {
    return (
       <>
        <header className={s.header}>
            <nav >
                <NavLink className={s.nav} to="/">Home</NavLink>
                <NavLink className={s.nav} to="movies">Movies</NavLink>
            </nav>
        </header>
            <main className={s.container}>
            <Outlet />
        </main>
       </>
  
    )
};

export default Layout ;