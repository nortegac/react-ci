import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PokemonList = ({ pokemonList }) => {
  return (
    <>
      <h1 className="title">Pokemons</h1>
      <div className="list-container">
        {pokemonList.map(({ id, name }) => (
          <Link key={id} className="list-item" style={{ backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`})` }}>
            <div
              className="list-item-name"
            >
              {name}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

PokemonList.PropTypes = {
  pokemonList: PropTypes.array.isRequired
};

export default PokemonList;
