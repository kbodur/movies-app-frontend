import React from 'react';
import { useParams } from 'react-router-dom';
import Movies from '../components/Movies'
import Search from '../components/Search';
import Profile from "../components/Profile"


const Index = () => {
    const { user_id } = useParams();


    return (
        <div className='Index'>
            <h2> username {user_id}'s Movies</h2>
            <Movies />


        </div>

    );
};

export default Index;