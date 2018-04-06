import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import './Filters.css';

export class Filters extends Component{
    constructor(){
        super();
    }

    showMeCheck = (e) =>{        
        const value = e.target.value.toLowerCase();

        const data = this.props.tickets;
        const arr = data.filter(item => item['stops'] == value);

        this.props.update({
            tickets: arr
        });
    }

    render(){
        const {tickets} = this.props;

        return (
            <div className="filters">
                <div className="filters__title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
                <Checkbox
                    label="Все"
                />
                <Checkbox
                    label="Без пересадок"
                    onCheck={this.showMeCheck.bind(this)}
                    value="0"
                />
                <Checkbox
                    label="1 пересадка"
                    onCheck={this.showMeCheck.bind(this)}
                    value="1"
                />
                <Checkbox
                    label="2 пересадки"
                    onCheck={this.showMeCheck.bind(this)}
                    value="2"
                />
                <Checkbox
                    label="3 пересадки"
                    onCheck={this.showMeCheck.bind(this)}
                    value="3"
                />
            </div>
        )
    }
}

export default Filters;



