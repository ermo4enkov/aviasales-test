import React, { Component } from 'react';
import Button from '../../components/Button';
import './Card.css';
import flyLogo from '../../assets/img/fly_logo.svg';

export class Card extends Component {
  render() {
    const {
      price,
      arrival_date,
      arrival_time,
      carrier,
      departure_date,
      departure_time,
      destination,
      destination_name,
      origin,
      origin_name,
      stops,
    } = this.props;
    return (
      <div className="card">
        <div className="card__pay">
          <img className="card__logo" src={flyLogo} alt="" />
          <Button price={price} />
        </div>
        <div className="card__info">
          <div className="card__departure">
            <div className="card__time">{departure_time}</div>
            <div className="card__address">
              {origin},
              {origin_name}
            </div>
            <div className="card__date">{departure_date}</div>
          </div>
          <div className="card__destination">
            <div className="card__time">{arrival_time}</div>
            <div className="card__address">
              {destination},
              {destination_name}
            </div>
            <div className="card__date">{arrival_date}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
