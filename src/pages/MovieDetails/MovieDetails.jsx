import { useEffect, useState } from "react";

import fetchMovie from "service/fetchAPI";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([])
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    console.log(movieId)
    useEffect(() => {
        setIsLoading(true)
        const getMovie = async () => {
        try {
            const data = await fetchMovie(movieId);
            console.log(data)
            setMovie(data);
        } catch (error) {
            setError(error)
            console.error(error.message)
        } finally {
            setIsLoading(false)
        }
        };
        getMovie();
    },[movieId])
    console.log(movie)
  
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>{ error}</div>}
            <div>Now showing product with id - {movieId}</div>
            <Link to="cast">Get to know the team</Link>
            <Link to="reviews">Go through the reviews</Link>   
        </>
    );
};

export default MovieDetails;