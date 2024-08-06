

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const API = import.meta.env.VITE_BASE_URL;

function ReviewEditForm({ id }) {
    const { user_id, movie_id } = useParams();
    const navigate = useNavigate();
    const [review, setReview] = useState({
        rating: '',
        comment: ''
    })
    const editReview = () => {
        fetch(`${API}/users/${user_id}/movies/${movie_id}/reviews/${id}`, {
            method: "PUT",
            body: JSON.stringify({ ...review, movie_id: movie_id }),
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

    const handleChange = (event) => {
        setReview({ ...review, [event.target.id]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        editReview();
    };


    return (
        <div className="review-edit-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="rating">Rating:</label><br />
                <input
                    id="rating"
                    type="number"
                    value={review.rating}
                    onChange={handleChange}
                    min="0"
                    max="10"
                    step="1"
                    required
                /><br />
                <label htmlFor="comment">Comment:</label><br />
                <textarea
                    id="comment"
                    value={review.comment}
                    onChange={handleChange}
                    required
                /><br />
                <button type="submit">Update</button>
            </form>
        </div>
    );

}

export default ReviewEditForm;
