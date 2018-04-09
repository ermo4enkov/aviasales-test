import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import './Filters.css';

export class Filters extends Component{
    constructor(){
        super();

        this.state = {
            checkBoxall: false,
            checkBox0: false,
            checkBox1: false,
            checkBox2: false,
            checkBox3: true,
        }
    }

    

    showMeCheck = (e) =>{        
        const value = e.target.value;
        const checked = e.target.checked;
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

    checkAll = (e) => {
        const checked = e.target.checked;

        // checked? this.setState({
        //     checkBoxCheck: true
        // }): this.setState({
        //     checkBoxCheck: false
        // });  
    }

    changeStateCheckBox = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        console.log(checked)

        checked? this.setState({
            checkBox3: true
        }): this.setState({
            checkBox3: false
        })

        console.log(this.state)
    }

    render(){

        return (
            <div className="filters">
                <div className="filters__title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
                <Checkbox
                    label="Все"
                    value="all"
                    onCheck={this.checkAll.bind(this)}
                    // checked={this.state.checkBoxall}
                    defaultChecked={true}
                />
                <Checkbox
                    label="Без пересадок"
                    onCheck={this.showMeCheck.bind(this)}
                    value="0"
                    // checked={this.state.checkBox0}
                    defaultChecked={true}
                />
                <Checkbox
                    label="1 пересадка"
                    onCheck={this.showMeCheck.bind(this)}
                    value="1"
                    // checked={this.state.checkBox1}
                    defaultChecked={true}
                />
                <Checkbox
                    label="2 пересадки"
                    onCheck={this.showMeCheck.bind(this)}
                    value="2"
                    // checked={this.state.checkBox2}
                    defaultChecked={true}
                />
                <Checkbox
                    label="3 пересадки"
                    onCheck={this.changeStateCheckBox.bind(this)}
                    value="3"
                    defaultChecked={this.state.checkBox3}
                />
            </div>
        )
    }
}

export default Filters;



