import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "service/fetchAPI";

export default function useFetchMovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true)
        const getReviews = async () => {
            try {
                const data = await fetchMovieReviews(movieId);
                setReviews(data);
            } catch (error) {
                setError(error.message)
                console.error(error.message)
            } finally {
                setIsLoading(false)
            }
        };
        getReviews();
        
    }, [movieId]);
    
    return {error, isLoading, reviews};
}