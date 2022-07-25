import useFetchMovieDetails from 'hooks/useFetchMovieDetails'
import { Link, Outlet, useNavigate } from "react-router-dom";
import { MutatingDots } from 'react-loader-spinner';
import s from './MovieDetails.module.css'

const MovieDetails = () => {
    const { error, isLoading, movie } = useFetchMovieDetails();
    // const location = useLocation();
    // const goBackLink = location?.state?.from ?? '/';
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const {
        title,
        overview,
        release_date,
        poster_path,
        original_language,
        vote_average,
        genres, } = movie;
    
    return (
        <>
            {/* <Link to={goBackLink}>Back</Link> */}
            {isLoading && <MutatingDots />} 
            {error && <div>{error}</div>} 
            <button onClick={goBack}>Go Back</button>
                <div className={s.filmsGallery}>
                    <div className={s.galleryItems}>
                        <div className={s.moviеItem}>
                            <img
                                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                                alt={title}
                                className={s.moviеItemImg}
                            />
                        </div>
                        <div className={s.moviеStats}>
                            <h2 className={s.moviеStatsTitle}>{title}</h2>
                            <div className={s.moviеStatsInfo}>
                                <p className={s.moviеGenre}>{genres && genres.map(e=>e.name).join(' ')}</p>
                                <p className={s.moviеYear}>{release_date}</p>
                                <p className={s.moviеYear}>{original_language}</p>
                                <p className={s.moviеVote}>{vote_average}</p>
                                <p className={s.moviеOverview}>{overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>  
            <Outlet/>
        </>
    );
};

export default MovieDetails;