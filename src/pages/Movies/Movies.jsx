import { useState, useEffect } from "react";
import SearchForm from "components/SearchForm";
import  {fetchMovieSearch}  from "service/fetchAPI";
import { Link, useSearchParams, useLocation, Navigate } from "react-router-dom";
import { MutatingDots } from 'react-loader-spinner';
import s from './Movies.module.css'

const Movies = () => {
  const [queryMovie, setQueryMovie] = useState('');
  const [resultQuery, setResultQuery] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    const movieName = searchParams.get('formInput');
    if (!movieName) {
      return;
    }
    // if (location.search === '') {
    //   return;
    // }
    setIsLoading(true);
    const getData = async () => {
      try {
        const data = await fetchMovieSearch(movieName);
        setResultQuery(data);
      }
      catch (error) {
        setError(error.message);
        console.error(error.message);
        setSearchParams();
      } finally {
        setIsLoading(false)
      }
    };
    getData();
  }, [ searchParams, setSearchParams, setResultQuery]);

  const handleSubmit = formInput => {
    setQueryMovie(searchParams.get('formInput'));
    setSearchParams({formInput: formInput})
  }

    return (
      <>
        <SearchForm onSubmit={handleSubmit}/>
        {isLoading && <MutatingDots />}  
        {error && <Navigate to="/" replace />} 
       <ul>
            {resultQuery.length !== 0 && resultQuery.map(({id, title}) => (
                <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                  {/* <img
                      src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                      alt={title}
                      className={s.moviеItemImg}
                  /> */}
                </Link>
                </li>
            ))}
          </ul>
      </>

  );
};

export default Movies;