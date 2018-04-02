import React, { Component } from 'react';
import Card from '../../../src/components/Card';

class CardsList extends Component {
  constructor() {
    super();
    this.state = {
      ticketsList: [],
    };
  }

  static getDerivedStateFromProps(props, prevState) {
    const tickets = props.tickets;
    if (!props.tickets) {
      return null;
    }
    return {
      ticketsList: props.tickets,
    };
  }

  render() {
    const List = this.state.ticketsList.tickets
      ? this.state.ticketsList.tickets.map((item, index) => {
          console.log(item);
          return <Card key={index}>{item['arrival_date']}</Card>;
        })
      : null;
    return <div>{List}</div>;
  }
}

export default CardsList;
