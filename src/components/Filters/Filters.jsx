import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import './Filters.css';

export class Filters extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="filters">
                <div className="filters__title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
                <Checkbox
                    label="Без пересадок"
                />
                <Checkbox
                    label="Все"
                />
                <Checkbox
                    label="1 пересадка"
                />
                <Checkbox
                    label="2 пересадки"
                />
                <Checkbox
                    label="3 пересадки"
                />
            </div>
        )
    }
}

export default Filters;



