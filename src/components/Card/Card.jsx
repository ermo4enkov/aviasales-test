import React, { Component } from 'react';
import Button from '../../components/Button';
import './Card.css';
import flyLogo from '../../assets/img/fly_logo.svg';

export class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__pay">
          <img className="card__logo" src={flyLogo} alt="" />
          <Button />
        </div>
        <div className="card__info" />
      </div>
    );
  }
}

export default Card;
