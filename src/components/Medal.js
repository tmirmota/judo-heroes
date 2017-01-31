'use strict';

import React, { Component } from 'react';
import typeMap from '../data/typeMap';

class Medal extends Component {
  render() {
    return (
      <li className="medal">
        <span className={'symbol symbol-${this.props.type}'} title={typeMap[this.props.type]}>{this.props.type}</span>
        <span className="year">{this.props.year}</span>
        <span className="city"> {this.props.city}</span>
        <span className="event"> ({this.props.event})</span>
        <span className="category"> {this.props.category}</span>
      </li>
    );
  }
}

export default Medal;
