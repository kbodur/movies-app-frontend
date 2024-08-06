import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Movies from '../components/Movies';
import Footer from '../components/Footer';

const Index = () => {
    const { user_id } = useParams();
    const [username, setUsername] = useState('');
    const API = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${API}/users/${user_id}`);
                const data = await response.json();
                console.log(data);
                if (response.ok) {
                    setUsername(data.username);
                } else {
                    console.error(data.error);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (user_id) {
            fetchUserData();
        }
    }, [user_id]);

    return (
        <div className='Index'>
            <img className='img' src="https://media.gettyimages.com/id/1244034031/vector/cinema-poster-with-cola-film-strip-and-clapper-vector.jpg?s=612x612&w=gi&k=20&c=8ClshQC50T-wPj6CPvnPnFq1Er6Fs8fbrreXWehvdgk=" />
            <h2>Welcome {username}</h2>
            <Movies />
            <Footer />
        </div>
    );
};

export default Index;
