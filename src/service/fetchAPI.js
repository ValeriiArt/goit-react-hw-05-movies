import axios from "axios";

const API_KEY = '9247604179ba4f8029cfb34035e24946';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// https://api.themoviedb.org/3/movie/725201?api_key=9247604179ba4f8029cfb34035e24946

export default async function getTrendingDayMovie() {
    
    const {data} = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    const { results } = data;

    const trendingMovie = results.map((
        {   id,
            title,
            overview,
            release_date,
            poster_path,
            original_language,
            genre_ids,
        }) => ({
            id,
            title,
            overview,
            release_date,
            poster_path,
            original_language,
            genre_ids,
        })
    );
    return trendingMovie;
};

export async function fetchMovie(movie_id) {
    
    const movie = await axios.get(`movie/${movie_id}?api_key=${API_KEY}`);
    // const { results } = data;
    console.log(movie)
    return movie;
};