// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import useFetchMovie from 'hooks/useFetchMovie'
import { MutatingDots } from 'react-loader-spinner';

const Home = () => {
    const { trendingMovie, error, isLoading } = useFetchMovie();
    // const location = useLocation();

  return (
    <div>
        <h1>Home page</h1>
          {isLoading && <MutatingDots />}
          {error && <h2>Упс! Щось пішло не так</h2>}
        <ul>
            {trendingMovie.length !== 0 && trendingMovie.map(({id, title}) => (
                <li key={id}>
                    <Link to={`movies/${id}`}>{title}</Link>
                </li>
            ))}
          </ul>
          {/* <Outlet/> */}
    </div>
  );
};

export default Home;