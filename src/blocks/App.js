import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from '../logo.svg';
import './App.css';
import Button from '../../src/components/Button';
import Filters from '../../src/components/Filters';
import Card from '../../src/components/Card';
import request from '../utils/request';

class App extends Component {
  componentDidMount() {
    request('tickets.json').then((data) => {
      const tickets = JSON.parse(data);
      console.log(tickets);
    });
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <img src={logo} alt="logo" className="App-logo" />
          <div className="container">
            <Filters />
            <Card />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
