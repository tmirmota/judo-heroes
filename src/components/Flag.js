'use strict';

import React, { Component } from 'react';
import data from '../data/country-data';

class Flag extends Component {
  render() {
    const name = data[this.props.code].name;
    const icon = data[this.props.code].icon;
    return (
      <span className="flag">
        <img className="icon" title={name} src={'/img/${icon}'}/>
        {this.props.showName && <span className="name"> {name}</span>}
      </span>
    );
  }
}

export default Flag;
