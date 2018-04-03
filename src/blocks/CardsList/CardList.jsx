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
          return (
            <Card
              key={index}
              arrival_date={item['arrival_date']}
              arrival_time={item['arrival_time']}
              carrier={item['carrier']}
              departure_date={item['departure_date']}
              departure_time={item['departure_time']}
              destination={item['destination']}
              destination_name={item['destination_name']}
              origin={item['origin']}
              origin_name={item['origin_name']}
              price={item['price']}
              stops={item['stops']}
            >
              {item['arrival_date']}
            </Card>
          );
        })
      : null;
    return <div>{List}</div>;
  }
}

export default CardsList;
