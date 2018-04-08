import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import './Filters.css';

export class Filters extends Component{
    constructor(){
        super();

        this.state = {
            ticketsColl: null
        }
    }

    

    showMeCheck = (e) =>{        
        const value = e.target.value;

        const checked = e.target.checked;

        
        // checked? valueArr.push(value): valueArr = valueArr.filter(item => item != value);

        const data = this.props.initialData.tickets;

        const tickets = this.props.tickets

        if(checked) {
            const filterData = data.filter(item => item['stops'] == value);
            filterData.forEach(item => tickets.push(item));
            this.props.update({
                tickets: tickets
            });
        } else {
            const filterData = tickets.filter(item => item['stops'] != value);    
            this.props.update({
                tickets: filterData
            });
        }
    }

    render(){
        const {tickets, initialData} = this.props;


        return (
            <div className="filters">
                <div className="filters__title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
                <Checkbox
                    label="Все"
                    defaultChecked={true}
                />
                <Checkbox
                    label="Без пересадок"
                    onCheck={this.showMeCheck.bind(this)}
                    value="0"
                    defaultChecked={true}
                />
                <Checkbox
                    label="1 пересадка"
                    onCheck={this.showMeCheck.bind(this)}
                    value="1"
                    defaultChecked={true}
                />
                <Checkbox
                    label="2 пересадки"
                    onCheck={this.showMeCheck.bind(this)}
                    value="2"
                    defaultChecked={true}
                />
                <Checkbox
                    label="3 пересадки"
                    onCheck={this.showMeCheck.bind(this)}
                    value="3"
                    defaultChecked={true}
                />
            </div>
        )
    }
}

export default Filters;



