import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as ReactD3 from "react-d3-components";

var LineChart = ReactD3.LineChart;

var data ={
    values: [{ x: 0, y: 2 }, { x: 1.3, y: 5 }, { x: 3, y: 6 }, { x: 3.5, y: 6.5 }, { x: 4, y: 6 }, { x: 4.5, y: 6 }, { x: 5, y: 7 }, { x: 5.5, y: 8 }]
  };

class App extends Component {
  render() {
    return (
      <div className="App">
       <h2 style={{marginTop:"100px"}}>Some Readings example</h2>
        <LineChart
          data={data}
          width={400}
          height={400}
          margin={{ top: 10, bottom: 50, left: 50, right: 10 }} />
      </div>
    );
  }
}

export default App;
