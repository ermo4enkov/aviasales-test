import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import request from '../../utils/request';
import logo from '../../logo.svg';
import './App.css';
import Button from '../../../src/components/Button';
import Filters from '../../../src/components/Filters';
import CardsList from '../CardsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: null,
    };
    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    request('tickets.json')
      .then(
        response => {
          this.initialData = JSON.parse(response)
          this.setState({
            tickets: this.initialData['tickets']
          })
        },
        error => console.log(`Rejected: ${error}`)
      )
      .catch(
        error => console.log(`Rejected: ${error}`)
      );
  }

  updateData(config) {
    this.setState(config);
  }

  render() {
    const { tickets } = this.state;
    const initialData = this.initialData;

    return (
      <MuiThemeProvider>
        <div className="App">
          <img src={logo} alt="logo" className="App-logo" />
          <div className="container">
            <Filters update={this.updateData} tickets={tickets} initialData={initialData}/>
            <CardsList tickets={tickets} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
