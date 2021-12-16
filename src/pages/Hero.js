import React from 'react';
import './Hero.css';
import Btn from '../components/Btn.js';
import Blops from '../components/Blops';

export default function Hero(props) {
  return (
    <div className="start">
      <div className="start-text">
        <h1 className="start-title">Quizzical</h1>
        <p className="start-description">
          Lets see if yout are the smatest in the world
        </p>
        <Btn action={props.start} value="Start quiz" type="hero-start-btn" />
      </div>
      <Blops type="big" />
    </div>
  );
}
