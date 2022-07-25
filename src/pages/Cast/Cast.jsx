import useFetchMovieCast from 'hooks/useFetchMovieCast'
import { MutatingDots } from 'react-loader-spinner';
import s from './Cast.module.css'

const Cast = () => {
    const { error, isLoading, cast } = useFetchMovieCast();

    return (
        <>
            {isLoading && <MutatingDots />} 
            {error && <div>{error}</div>}
            <ul>
                {cast.map(({ id, profile_path, name, }) => (
                    <li key={id}>
                        {profile_path !== null && <img
                            src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                            alt={name}
                            className={s.moviеItemImg}
                        />}
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </>
    )
};
export default Cast;