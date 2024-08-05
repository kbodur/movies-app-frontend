import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
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
                setError("An error occurred while fetching movie details.");
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [user_id, movie_id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="movie-detail">
            {movie ? (
                <>
                    <img src={movie.poster_url} alt={movie.title} />
                    <h2>{movie.title}</h2>
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Genre:</strong> {movie.genre}</p>
                    <p><strong>Description:</strong> {movie.description}</p>
                    <p><strong>Rating:</strong> {movie.rating}/10</p>
                    <p><strong>Duration:</strong> {movie.duration}</p>
                </>
            ) : (
                <p>Movie details not found.</p>
            )}
        </div>
    );
};

export default MovieDetailPage;
