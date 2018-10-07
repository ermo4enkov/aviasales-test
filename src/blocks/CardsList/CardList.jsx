import React, { Component } from 'react';
import Card from '../../../src/components/Card';
import { compareParams } from '../../utils/utils';

class CardsList extends Component {
  render() {
    return <div>{this.showFilterdList()}</div>;
  }

  showFilterdList(){
    const sortedList = this.props.tickets ? this.props.tickets.sort(compareParams('stops')).map((item, index) => {
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
