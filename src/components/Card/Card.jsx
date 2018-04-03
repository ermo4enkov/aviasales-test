import React, { Component } from 'react';
import Button from '../../components/Button';
import './Card.css';
import flyLogo from '../../assets/img/fly_logo.svg';

export class Card extends Component {
  render() {
    const { price } = this.props;
    return (
      <div className="card">
        <div className="card__pay">
          <img className="card__logo" src={flyLogo} alt="" />
          <Button price={price} />
        </div>
        <div className="card__info" />
      </div>
    );
  }
}

export default Card;
