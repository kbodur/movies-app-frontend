import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className='index'>
                <Link to={`/users/${user_id}/movies`}>
                </Link><button>Index</button></div>
            <div className='search'>
                <Link to={`/users/${user_id}/movies`}>
                </Link>Search</div>
            <div className='profile'>
                <Link to={`/users/${user_id}`}>
                </Link>Profile</div>
        </div>
    )
}

export default Footer
