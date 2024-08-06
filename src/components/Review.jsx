import React, { useState } from 'react'
import ReviewEditForm from './ReviewEditForm'

const Review = ({ review }) => {
    const [editing, setEditing] = useState(false)

    const handleEdit = () => {
        console.log(editing)
        setEditing(!editing)
    }



    return (

        <div>

            <p><strong>Rating:</strong> {review.rating}/10</p>
            <p><strong>Comment:</strong> {review.comment}</p>
            <button onClick={handleEdit}>Edit </button>
            {editing &&
                <ReviewEditForm id={review.id} />}
        </div>
    )
}

export default Review
