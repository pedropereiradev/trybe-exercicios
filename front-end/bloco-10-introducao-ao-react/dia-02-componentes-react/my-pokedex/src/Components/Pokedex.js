import React, { Component } from 'react';
import Pokemon from './Pokemon';
import data from './data';
import '../styles/Pokedex.css'

class Pokedex extends Component {
  render() {
    return (
      <section className='pokedex'>
        {data.map((data) => (<Pokemon
          name={data.name}
          type={data.type}
          averageWeight={data.averageWeight}
          image={data.image}
        />))}
      </section>
    );
  }
}

export default Pokedex;
