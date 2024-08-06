import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Profile = () => {
    const { user_id } = useParams();
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API = import.meta.env.VITE_BASE_URL;
    const navigate = useNavigate(); // useNavigate hook'u

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${API}/users/${user_id}`);
                const data = await response.json();
                if (response.ok) {
                    setUserData(data);
                } else {
                    setError(data.error);
                }
            } catch (err) {
                setError('Error fetching user data.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [user_id]);

    const handleLogout = () => {

        console.log("Logged out");

        navigate("/");
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className='Profile'>
            <img className='img' src="https://media.gettyimages.com/id/1244034031/vector/cinema-poster-with-cola-film-strip-and-clapper-vector.jpg?s=612x612&w=gi&k=20&c=8ClshQC50T-wPj6CPvnPnFq1Er6Fs8fbrreXWehvdgk=" />
            <h1>Profile</h1>
            <div className='profile-info'>
                <img className='image' src={userData.profile_picture} alt={`${userData.username}'s profile`} />
                <h2>{userData.username}</h2>
                <p>Email: {userData.email}</p>
            </div>
            <div className='profile-actions'>
                <button onClick={() => alert('Go to settings')}>Settings</button> <br /> <br />
                <button onClick={handleLogout}>Log Out</button>
                <br /> <br />
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
