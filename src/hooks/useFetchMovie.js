import { useState, useEffect } from "react";
import  getTrendingDayMovie  from "service/fetchAPI";

export default function useFetchMovie() {
    const [trendingMovie, setTrendingMovie] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const getData = async () => {
            try {
                const data = await getTrendingDayMovie();
                setTrendingMovie(data);
            }
            catch (error) {
                setError(error.message)
                console.error(error.message);
            } finally {
                setIsLoading(false)
            }
        };
        getData();
    }, [])
  
    return {trendingMovie, error, isLoading} ;
};