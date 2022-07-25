import useFetchMovieReviews from 'hooks/useFetchMovieReviews';
import { MutatingDots } from 'react-loader-spinner';
// import s from './Reviews.module.css'

const Reviews = () => {
    const { error, isLoading, reviews } = useFetchMovieReviews();

    return (
        <>
            {isLoading && <MutatingDots />} 
            {error && <div>{error}</div>}
            <ul>
                {reviews.map(({ id, author, content, created_at }) => (
                    <li key={id}>
                        <h3>{author}</h3>
                        <p>{created_at}</p>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>
        </>
    )
};
    
export default Reviews;