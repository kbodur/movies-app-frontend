import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = () => {
    const { user_id, movie_id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`${API}/users/${user_id}/movies/${movie_id}`);
                const data = await response.json();
                if (response.ok) {
                    setMovie(data);
                } else {
                    setError(data.message);
                }
            } catch (err) {
                setError("An error occurred while fetching the movie.");
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [user_id, movie_id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    if (!movie) return <p>Movie not found.</p>;

    return (
        <div className="movie-details">

            <div className="movie-background" style={{ backgroundImage: `url(${movie.poster_url})` }} >
                <h2>{movie.title}</h2>
                <p><strong>Release Date:</strong> {movie.release_date}</p>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Description:</strong> {movie.description}</p>
                <p><strong>Rating:</strong> {movie.rating}/10</p>
                <p><strong>Duration:</strong> {movie.duration}</p>
                <p><strong>Favorite:</strong> {movie.is_favorite ? 'Yes' : 'No'}</p>

                <h2>Reviews</h2>
                {movie.reviews && movie.reviews.length > 0 ? (
                    <ul>
                        {movie.reviews.map((review, index) => (
                            <li key={index}>
                                <p><strong>{review.author}</strong>: {review.content}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No reviews available.</p>
                )}

                <Link to={`/users/${user_id}/movies`}>
                    <button>Back to Movies List</button>
                </Link>
            </div>
        </div>

    );
};

export default MovieDetails;
