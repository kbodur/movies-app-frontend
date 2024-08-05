import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Footer = () => {
    const { user_id } = useParams();
    return (
        <div className='footer'>
            <div className='footer-box'>
                <Link to={`/users/${user_id}/movies`}>Index</Link>
            </div>
            <div className='footer-box'>
                <Link to={`/users/${user_id}/search`}>Search</Link>
            </div>
            <div className='footer-box'>
                <Link to={`/users/${user_id}`}>Profile</Link>
            </div>
        </div>
    );
};

export default Footer;
