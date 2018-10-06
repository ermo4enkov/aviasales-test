import React, { Component } from 'react';
import Card from '../../../src/components/Card';
import { list } from 'postcss';
import { compareParams } from '../../utils/utils';

class CardsList extends Component {
  constructor() {
    super();
    this.state = {
      ticketsList: [],
    };
  }

  static getDerivedStateFromProps(props, prevState) {
    const tickets = props.tickets;
    if (!tickets) {
      return null;
    }
    // if (prevState.ticketsList.length === 0) {
    //   return{
    //     ticketsList: tickets.filter(item => item['stops'] === 1)
    //   }
    // }
    return {
      ticketsList: tickets,
    };
  }

  render() {
    return <div>{this.showFilterdList()}</div>;
  }

  showFilterdList(){
    const sortedList = this.state.ticketsList ? this.state.ticketsList.sort(compareParams('stops')).map((item, index) => {
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
    }) : null;
    return sortedList;
  }

}

export default CardsList;
