import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const [data, setData] = useState([]);
    const { user_id } = useParams();

    const API = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API}/movies`);
                const movies = await response.json();
                setData(movies);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();

        const filteredResults = data.filter((movie) =>
            movie.title.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
    };

    return (
        <div className='Search'>
            <img className='img' src="/movies.jpeg" />
            <h2>Search Movies</h2>
            <form onSubmit={handleSearch}>
                <input
                    type='text'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder='Search by title...'
                />
                <button type='submit'>Search</button>
            </form>
            <ul>
                {results.map((result) => (
                    <li key={result.id}>
                        <Link to={`/users/${user_id}/movies/${result.id}`}>{result.title}</Link>
                    </li>
                ))}
            </ul>
            <Footer />
        </div>
    );
};

export default Search;
