import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Movies = () => {
    const { user_id } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortCriterion, setSortCriterion] = useState('');
    const API = import.meta.env.VITE_BASE_URL;
    const navigate = useNavigate();

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
                setError('An error occurred while fetching movies.');
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [user_id]);

    const sortMovies = (movies, criterion) => {
        switch (criterion) {
            case 'favorites':
                return [...movies].sort((a, b) => (a.is_favorite === b.is_favorite) ? 0 : a.is_favorite ? -1 : 1);
            case 'name':
                return [...movies].sort((a, b) => a.title.localeCompare(b.title));
            default:
                return movies;
        }
    };

    const handleAddNewMovie = () => {
        navigate(`/users/${user_id}/movies/new`);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const sortedMovies = sortMovies(movies, sortCriterion);

    return (
        <div className="movies-list">
            <div className="sort-buttons">
                <button onClick={() => setSortCriterion('favorites')}>Sort by Favorites</button>
                <button onClick={() => setSortCriterion('name')}>Sort by Name</button>
                <button onClick={handleAddNewMovie}>Add New Movie</button>
            </div>
            {sortedMovies.length > 0 ? (
                <ul>
                    {sortedMovies.map((movie) => (
                        <li key={movie.id}>
                            <Link to={`/users/${user_id}/movies/${movie.id}`}>
                                <img src={movie.poster_url} alt={`${movie.title} poster`} />
                                <p>{movie.title}</p>
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

export default Movies;
