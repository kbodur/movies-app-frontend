import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const MovieDetails = () => {
    const { user_id, movie_id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [review, setReview] = useState([])

    const API = import.meta.env.VITE_BASE_URL;
    let navigate = useNavigate();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`${API}/users/${user_id}/movies/${movie_id}`);
                const data = await response.json();

                if (response.ok) {
                    console.log(data)
                    setMovie(data);
                } else {
                    setError(data.message || "Failed to fetch movie details.");
                }
            } catch (err) {
                setError("An error occurred while fetching the movie.");
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [user_id, movie_id]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`${API}/users/${user_id}/movies/${movie_id}/reviews`);
                const data = await response.json();

                if (response.ok) {
                    console.log(data)
                    setReview(data);
                } else {
                    setError(data.message || "Failed to fetch movie details.");
                }
            } catch (err) {
                setError("An error occurred while fetching the movie.");
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [user_id, movie_id]);



    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!movie) return <p>Movie not found.</p>;

    const deleteMovie = () => {
        if (window.confirm("Are you sure you want to delete this movie?")) {
            fetch(`${API}/users/${user_id}/movies/${movie_id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(res => {
                    navigate(`/users/${user_id}/movies`)
                })
                .catch(err => console.log(err))
        }
    };


    return (
        <div className="movie-details">
            <div
                className="movie-background"
                style={{ backgroundImage: `url(${movie.poster_url})` }}
            >
                <h2>{movie.title}</h2>
                <p><strong>Release Date:</strong> {movie.release_date}</p>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Description:</strong> {movie.description}</p>
                <p><strong>Rating:</strong> {movie.rating}/10</p>
                <p><strong>Duration:</strong> {movie.duration}</p>
                <p><strong>Favorite:</strong> {movie.is_favorite ? 'Yes' : 'No'}</p>

                <div>
                    <Link to={`/users/${user_id}/movies/${movie_id}/edit`}>
                        <button>Edit</button>
                    </Link>
                </div>
                <button onClick={deleteMovie} style={{ color: 'red' }}>Delete</button>
                <h2>Reviews</h2>
                {Array.isArray(review.reviews) && review.reviews.length > 0 ? (
                    <ul>
                        {review.reviews.map((review, index) => (
                            <li key={index}>
                                <p><strong>Rating:</strong> {review.rating}/10</p>
                                <p><strong>Comment:</strong> {review.comment}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No reviews available.</p>
                )}

                <Footer />
            </div>
        </div>
    );

}
export default MovieDetails;
