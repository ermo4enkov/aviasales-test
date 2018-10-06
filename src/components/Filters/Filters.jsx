import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import './Filters.css';
import { compareParams } from '../../utils/utils';

export class Filters extends Component{
    constructor(){
        super();

        this.state = {
            checkBoxAll: false,
            checkBox0: false,
            checkBox1: false,
            checkBox2: false,
            checkBox3: false,
            filteredTickets: [],
        }

        this.setCheckAll = this.setCheckAll.bind(this);
        this.showMeCheck = this.showMeCheck.bind(this);
    }

    showMeCheck = (e) =>{        
        const { value, checked, name } = e.target;
        const InitialDataTickets = this.props.initialData.tickets.sort(compareParams('stops'));
        
        this.setState(function(prevState){
            return { [name]: checked }
        });

        const {filteredTickets} = this.state;

        if (checked) {
            const equalFilterData = InitialDataTickets.filter(item => item['stops'] === +value);
            equalFilterData.forEach(item => {
                this.setState(function(){
                    return filteredTickets.push(item)
                });
            });
            this.props.update({
                tickets: this.state.filteredTickets
            });
        } else {
            const differentFilterData = InitialDataTickets.filter(item => item['stops'] !== +value);
            const filteredRes = filteredTickets.filter(f => differentFilterData.includes(f));
            this.setState({filteredTickets: [...filteredRes]});
            this.props.update({
                tickets: this.state.filteredTickets
            });
        }

        
    }

    setCheckAll = (e) => {
        const checked = e.target.checked;
        const InitialDataTickets = this.props.initialData.tickets;

        if (checked) {
            
            this.setState({
                checkBoxAll: true,
                checkBox0: true,
                checkBox1: true,
                checkBox2: true,
                checkBox3: true,
            })
            
            this.props.update({
                tickets: InitialDataTickets
            });  
        } else {
            this.setState({
                checkBoxAll: false,
            });
        }
    }

    render(){
        return (
            <div className="filters">
                <div className="filters__title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
                <Checkbox
                    label="Все"
                    value="all"
                    onCheck={this.setCheckAll}
                    name="checkBoxAll"
                    checked={this.state.checkBoxAll}
                />
                <Checkbox
                    label="Без пересадок"
                    onCheck={this.showMeCheck}
                    value="0"
                    name="checkBox0"
                    checked={this.state.checkBox0}
                />
                <Checkbox
                    label="1 пересадка"
                    onCheck={this.showMeCheck}
                    value="1"
                    name="checkBox1"
                    checked={this.state.checkBox1}
                />
                <Checkbox
                    label="2 пересадки"
                    onCheck={this.showMeCheck}
                    value="2"
                    name="checkBox2"
                    checked={this.state.checkBox2}
                />
                <Checkbox
                    label="3 пересадки"
                    onCheck={this.showMeCheck}
                    value="3"
                    name="checkBox3"
                    checked={this.state.checkBox3}
                />
            </div>
        )
    }
}

export default Filters;



