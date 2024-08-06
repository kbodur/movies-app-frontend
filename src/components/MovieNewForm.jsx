import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function MovieNewForm() {
    const { user_id } = useParams();
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

    const createMovie = () => {
        fetch(`${API}/users/${user_id}/movies`, {
            method: "POST",
            body: JSON.stringify(movie),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                navigate(`/users/${user_id}/movies`);
            })
            .catch(err => console.log(err))
    };


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
    const handleSubmit = (event) => {
        event.preventDefault();
        createMovie();
    };

    return (
        <div className="New-movie-form">
            <img className='img' src="https://media.gettyimages.com/id/1244034031/vector/cinema-poster-with-cola-film-strip-and-clapper-vector.jpg?s=612x612&w=gi&k=20&c=8ClshQC50T-wPj6CPvnPnFq1Er6Fs8fbrreXWehvdgk=" alt="Movies Background" />
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
                <label htmlFor="duration">Duration (minutes):</label><br />
                <input
                    id="duration"
                    value={movie.duration}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="Duration of Movie in minutes"
                    min="1"
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
            <button onClick={() => navigate(`/users/${user_id}/movies`)}>Cancel</button>
        </div>
    );
}

export default MovieNewForm;
