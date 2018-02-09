import React, { Component } from 'react';
import './App.css';

import * as ReactD3 from "react-d3-components";
import * as  Rebase from 're-base';
import * as firebase from 'firebase';

var app = firebase.initializeApp({
  apiKey: "AIzaSyDhRCEQxql-BmnCvZUhHEQklrYzcDlEJbQ",
  authDomain: "ecg-au-45a8c.firebaseapp.com",
  databaseURL: "https://ecg-au-45a8c.firebaseio.com",
  messagingSenderId: "659744702608"
});

var base = Rebase.createClass(app.database());

var LineChart = ReactD3.LineChart;

var data ={
    values: [
      { x: 0, y: 2 }, 
      { x: 1.3, y: 5 },
      { x: 3, y: 6 }, 
      { x: 3.5, y: 6.5 }
      ]
  };

var ecgData = null;

class ECG extends Component {

  render() {
    base.fetch('0000ffe1-0000-1000-8000-00805f9b34fb', {
      context: this,
      asArray: true,
      then(returnedData){
        ecgData = returnedData;
        console.log("ECG dtata is: ", ecgData);
        data.values.push({x: 34, y: 440});
        console.log("dtata is: ", data.values);

      }
    });

    

    return (
      <div className="App">
       <h2 style={{marginTop:"100px"}}>ECG</h2>
        <LineChart
          data={data}
          width={600}
          height={600}
          margin={{ top: 10, bottom: 50, left: 50, right: 10 }} />
      </div>
    );
  }
}

export default ECG;