'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

class AthletePreview extends Component {
  render() {
    return (
      <Link to={`/athletes/${this.props.id}`}>
        <div className="athlete-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          <span className="medals-count"><img src="/img/medal.png"/> {this.props.medals.length}</span>
        </div>
      </Link>
    );
  }
}

export default AthletePreview;
