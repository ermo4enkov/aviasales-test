import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import './Filters.css';

export class Filters extends Component{
    constructor(){
        super();

        this.state = {
            checkBoxAll: true,
            checkBox0: true,
            checkBox1: true,
            checkBox2: true,
            checkBox3: true,
        }
    }

    

    showMeCheck = (e) =>{        
        const value = e.target.value;
        const checked = e.target.checked;
        const name = e.target.name;
        const data = this.props.initialData.tickets;
        const tickets = this.props.tickets

        if(checked) {
            const filterData = data.filter(item => item['stops'] == value);
            filterData.forEach(item => tickets.push(item));
            this.props.update({
                tickets: tickets
            });
            this.setState({name: true})
        } else {
            const filterData = tickets.filter(item => item['stops'] != value);
            this.props.update({
                tickets: filterData
            });
            this.setState({name: false})
        }
    }

    checkAll = (e) => {
        const checked = e.target.checked;
        
        checked? this.setState({
            checkBoxAll: true,
            checkBox0: true,
            checkBox1: true,
            checkBox2: true,
            checkBox3: true,
        }): this.setState({
            checkBoxAll: false,
            checkBox0: false,
            checkBox1: false,
            checkBox2: false,
            checkBox3: false,
        });  
    }

    render(){

        return (
            <div className="filters">
                <div className="filters__title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
                <Checkbox
                    label="Все"
                    value="all"
                    onCheck={this.checkAll.bind(this)}
                    name="checkBoxAll"
                    defaultChecked={this.state.checkBoxAll}
                />
                <Checkbox
                    label="Без пересадок"
                    onCheck={this.showMeCheck.bind(this)}
                    value="0"
                    name="checkBox0"
                    defaultChecked={this.state.checkBox1}
                />
                <Checkbox
                    label="1 пересадка"
                    onCheck={this.showMeCheck.bind(this)}
                    value="1"
                    name="checkBox1"
                    defaultChecked={this.state.checkBox1}
                />
                <Checkbox
                    label="2 пересадки"
                    onCheck={this.showMeCheck.bind(this)}
                    value="2"
                    name="checkBox2"
                    defaultChecked={this.state.checkBox2}
                />
                <Checkbox
                    label="3 пересадки"
                    onCheck={this.showMeCheck.bind(this)}
                    value="3"
                    name="checkBox3"
                    defaultChecked={this.state.checkBox3}
                />
            </div>
        )
    }
}

export default Filters;



