
import { NavLink, Outlet } from "react-router-dom";
import s from './Layout.module.css'


const Layout = () => {
    // const navigate = useNavigate();
    // const goBack = () => navigate(-1);
    return (
       <>
        <header className={s.header}>
            <nav >
                <NavLink className={({ isActive }) => (isActive ? s.activeLink : s.nav)} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? s.activeLink : s.nav)} to="movies">Movies</NavLink>
            </nav>
        </header>
            <main className={s.container}>
                {/* <button onClick={goBack}>Go Back</button> */}
                <Outlet />
        </main>
       </>
  
    )
};

export default Layout ;