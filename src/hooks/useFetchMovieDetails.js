import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovie } from "service/fetchAPI";


export default function useFetchMovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true)
        const getMovie = async () => {
            try {
                const data = await fetchMovie(movieId);
                setMovie(data);
            } catch (error) {
                setError(error.message)
                console.error(error.message)
            } finally {
                setIsLoading(false)
            }
        };
        getMovie();    
    }, [movieId]);
    
    return { error, isLoading, movie }
};

