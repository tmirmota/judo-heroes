'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

import athletes from '../data/athletes';
import AthletesMenu from './AthletesMenu';
import Flag from './Flag';
import Medal from './Medal';
import NotFoundPage from './NotFoundPage';

class AthletePage extends Component {
  render() {
    const id = this.props.params.id;
    const athlete = athletes.filter((athlete) => athlete.id === id)[0];
    if (!athlete) {
      return <NotFoundPage />;
    }
    const headerStyle = { backgroundImage: `url(/img/${athlete.cover})` };
    return (
      <div className="athlete-full">
        <AthletesMenu />
        <div className="athlete">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${athlete.image}`}/>
            <h2 className="name">{athlete.name}</h2>
          </div>
          <section className="description">
            Olympic medalist from
            <strong><Flag code={athlete.country} showName="true" /></strong>,
            born in {athlete.birth} (Find out more on <a href={athlete.link} target="_blank">Wikipedia</a>).
          </section>
          <section className="medals">
            <p>Winner of <strong>{athlete.medals.length}</strong> medals;</p>
            <ul>{
              athlete.medals.map((medal, i) => <Medal key={i} {...medal} />)
            }</ul>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}

export default AthletePage;
