import axios from "axios";

const API_KEY = '9247604179ba4f8029cfb34035e24946';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// https://api.themoviedb.org/3/movie/725201/reviews?api_key=9247604179ba4f8029cfb34035e24946

export async function getTrendingDayMovie() {
    
    const {data} = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    const { results } = data;
    return results;
};

export async function fetchMovie(id) { 
    const {data} = await axios.get(`movie/${id}?api_key=${API_KEY}`);
    // console.log(data)
    return data;
};

export async function fetchMovieCast(id) {   
    const {data} = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
    const { cast } = data;
    return cast;
};

export async function fetchMovieReviews(id) {
    const {data} = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
    const { results } = data;
    // console.log(results)
    return results;
};

export async function fetchMovieSearch(query) {
    console.log(query);
    const {data} = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
    const { results } = data;
    console.log(results)
    return results;
};