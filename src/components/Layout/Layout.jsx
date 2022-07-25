
import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import s from './Layout.module.css'


const Layout = () => {
    // const navigate = useNavigate();
    // const goBack = () => navigate(-1);
    return (
       <>
        <header className={s.header}>
            <nav >
                <NavLink className={s.nav} to="/">Home</NavLink>
                <NavLink className={s.nav} to="movies">Movies</NavLink>
            </nav>
        </header>
            <main className={s.container}>
                {/* <button onClick={goBack}>Go Back</button> */}
                <Suspense>
                    <Outlet />
                </Suspense>
        </main>
       </>
  
    )
};

export default Layout ;