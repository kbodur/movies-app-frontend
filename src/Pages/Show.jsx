import React from 'react';
import { useParams } from 'react-router-dom';
import MoviesDetails from '../components/MoviesDetails'
const Show = () => {
    const { user_id } = useParams();


    return (
        <div className='Show'>
            <h2> username {user_id}'s Movies</h2>

            <MoviesDetails />
        </div>
    );
};

export default Show;