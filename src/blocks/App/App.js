import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import request from '../../utils/request';
import logo from '../../logo.svg';
import './App.css';
import Button from '../../../src/components/Button';
import Filters from '../../../src/components/Filters';
import CardsList from '../CardsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tickets: null,
    };
  }

  componentDidMount() {
    request('tickets.json').then(data => {
      this.setState({
        tickets: JSON.parse(data),
      });
    });
  }

  render() {
    const { tickets } = this.state;
    return (
      <MuiThemeProvider>
        <div className="App">
          <img src={logo} alt="logo" className="App-logo" />
          <div className="container">
            <Filters />
            <CardsList tickets={tickets} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
