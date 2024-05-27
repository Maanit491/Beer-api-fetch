import React from 'react';

const BeerCard = ({ name, image, tagline }) => {
    return (
        <div className="beer-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{tagline}</p>
        </div>
    );
};

export default BeerCard;
