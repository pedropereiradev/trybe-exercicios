import React, { Component } from 'react';
import '../styles/Pokemon.css'

class PokemonsCard extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props;

    return (
      <section className='pokemon'>
        <section className='pokemon-info'>
          <h3>{name}</h3>
          <p>{type}</p>
          <p>
            {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </section>
        <section className='pokemon-image'>
          <img
            src={image}
            alt={`Imagem do pokemon ${name}`}
          />
        </section>
      </section>
    );
  }
}

export default PokemonsCard;