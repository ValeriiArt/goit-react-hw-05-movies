import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Layout  from "./Layout";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";
import Cast from "../pages/Cast";
import Reviews from "../pages/Reviews"; 


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={3000}/>
    </div>
  );
};
