import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const MoviesDetails = () => {
    const { user_id } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(`${API}/users/${user_id}/movies`);
                const data = await response.json();
                if (response.ok) {
                    setMovies(data);
                } else {
                    setError(data.message);
                }
            } catch (err) {
                setError("An error occurred while fetching movies.");
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [user_id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="movies-list">
            {movies.length > 0 ? (
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.id}>
                            <Link to={`/users/${user_id}/movies/${movie.id}`}>
                                <img src={movie.poster_url} />
                                <h3>{movie.title}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No movies found for this user.</p>
            )}
        </div>
    );
};

export default MoviesDetails;
