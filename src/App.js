import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BeerCard from './BeerCard';

const App = () => {
    const [beers, setBeers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://api.sampleapis.com/beers/ale');
            setBeers(response.data);
        };

        fetchData();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredBeers = beers.filter((beer) =>
        beer.name.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="App">
            <h1> Beers API</h1>
            <input
                type="text"
                placeholder="Search beers..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="beer-list">
                {filteredBeers.map((beer) => (
                    <BeerCard key={beer.name} {...beer} />
                ))}
            </div>
        </div>
    );
};

export default App;
