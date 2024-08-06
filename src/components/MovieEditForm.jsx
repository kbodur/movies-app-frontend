import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function MovieEditForm() {
    let { user_id, movie_id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState({
        title: "",
        description: "",
        genre: "",
        release_date: "",
        rating: "",
        duration: "",
        poster_url: "",
        is_favorite: false,
    });

    useEffect(() => {
        fetch(`${API}/users/${user_id}/movies/${movie_id}`)
            .then(res => res.json())
            .then(res => {

                const formattedDate = new Date(res.release_date).toISOString().split('T')[0];
                setMovie({
                    ...res,
                    release_date: formattedDate
                });
            })
            .catch(err => console.log("Error fetching movie data:", err));
    }, [user_id, movie_id]);

    const handleTextChange = (event) => {
        const { id, value, type, checked } = event.target;
        setMovie({
            ...movie,
            [id]: type === 'checkbox' ? checked : value
        });
    };

    const handleCheckboxChange = () => {
        setMovie({ ...movie, is_favorite: !movie.is_favorite });
    };

    const updateMovie = () => {

        const formattedDate = new Date(movie.release_date).toISOString().split('T')[0];

        fetch(`${API}/users/${user_id}/movies/${movie_id}`, {
            method: "PUT",
            body: JSON.stringify({ ...movie, release_date: formattedDate }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok.');
                }
                return res.json();
            })
            .then(res => {
                navigate(`/users/${user_id}/movies/${movie_id}`);
            })
            .catch(err => console.log("Error during update:", err));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateMovie();
    };



    return (
        <div className="Edit-page">
            <img className='img' src="/movies.jpeg" />
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label><br />
                <input
                    id="title"
                    value={movie.title}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Title of Movie"
                    required
                /><br />
                <label htmlFor="description">Description:</label><br />
                <textarea
                    id="description"
                    value={movie.description}
                    onChange={handleTextChange}
                    placeholder="Description of Movie"
                    required
                /><br />
                <label htmlFor="poster_url">Poster URL:</label><br />
                <input
                    id="poster_url"
                    value={movie.poster_url}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="URL of Movie Poster"
                /><br />
                <label htmlFor="genre">Genre:</label><br />
                <input
                    id="genre"
                    value={movie.genre}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Genre of Movie"
                    required
                /><br />
                <label htmlFor="release_date">Release Date:</label><br />
                <input
                    id="release_date"
                    value={movie.release_date}
                    type="date"
                    onChange={handleTextChange}
                    required
                /><br />
                <label htmlFor="rating">Rating:</label><br />
                <input
                    id="rating"
                    value={movie.rating}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="Rating out of 10"
                    min="0"
                    max="10"
                    step="1"
                    required
                /><br />
                <label htmlFor="duration">Duration:</label><br />
                <input
                    id="duration"
                    value={movie.duration}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Duration of Movie"
                    required
                /><br />
                <label htmlFor="is_favorite">Favorite:</label><br />
                <input
                    id="is_favorite"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={movie.is_favorite}
                /><br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            <button onClick={() => navigate(`/users/${user_id}/movies/${movie_id}`)}>Cancel</button>

        </div>
    );
}

export default MovieEditForm;
