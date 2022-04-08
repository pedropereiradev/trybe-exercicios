import React, { Component } from 'react';
import propTypes from 'prop-types';

class Header extends Component {
  render() {
    const { title } = this.props;

    return(
      <header>
        <h1>{title}</h1>
      </header>
    )  
  }
}

Header.propTypes = {
  title: propTypes.string.isRequired,
}

export default Header