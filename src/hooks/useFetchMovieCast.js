import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "service/fetchAPI";

export default function useFetchMovieCast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
  
    useEffect(() => {
        setIsLoading(true)
        const getCast = async () => {
            try {
                const data = await fetchMovieCast(movieId);
                setCast(data);
            } catch (error) {
                setError(error.message)
                console.error(error.message)
            } finally {
                setIsLoading(false)
            }
        };
        getCast();
        
    }, [movieId]); 
    return { error, isLoading, cast}
};