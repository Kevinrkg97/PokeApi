import React from 'react'
import './pokeCard.css'

const PokemonCard = ({id, image, name, type }) => {
    return (
        <div className="card">
            <img src={image} alt={name} />
            <div className="details">
            <h3 className="number">{id}</h3>
                <h2>{name}</h2>
                <p>Tipo: {type}</p>
            </div>
        </div>
    )
}

export default PokemonCard;