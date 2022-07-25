import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Layout  from "./Layout";
import { MutatingDots } from 'react-loader-spinner';

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Cast = lazy(() => import("../pages/Cast"));
const Reviews = lazy(() => import("../pages/Reviews"));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<MutatingDots/>}>
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
      </Suspense>
    </div>
  );
};
