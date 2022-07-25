import { useState, useEffect } from "react";
import SearchForm from "components/SearchForm";
import  {fetchMovieSearch}  from "service/fetchAPI";
import { Link, useSearchParams } from "react-router-dom";
import { MutatingDots } from 'react-loader-spinner';
import s from './Movies.module.css'

const Movies = () => {
  const [queryMovie, setQueryMovie] = useState('');
  const [resultQuery, setResultQuery] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(queryMovie);

  useEffect(() => {
    const movieName = searchParams.get('formInput');
    if (!movieName) {
      return;
    }
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

  console.log(resultQuery)
    return (
      <>
        <SearchForm onSubmit={handleSubmit}/>
        {isLoading && <MutatingDots />}  
        {error && <div>{error}</div>} 
       <ul>
            {resultQuery.length !== 0 && resultQuery.map(({id, title, poster_path}) => (
                <li key={id}>
                <Link to={`${id}`}>
                  {title}
                  <img
                      src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                      alt={title}
                      className={s.moviеItemImg}
                  />
                </Link>
                </li>
            ))}
          </ul>
      </>

  );
};

export default Movies;