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

var data = {
  values: [
    { x: 0, y: 0 }
  ]
};
var samplesCounter = 0;

class ECG extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        values: [
          { x: 0, y: 0 }
        ]} };
  }

  componentDidMount() {
  //  get the data from firebase's real-time database
    base.listenTo('0000ffe1-0000-1000-8000-00805f9b34fb', {
      context: this,
      asArray: true,
      queries: {
        limitToLast: 1
      },
      then(returnedData) {
        console.log("length of returned data: ", returnedData);
        for (const array of returnedData) {
          // loop over all the returned arrays
          for (let reading of array) {
            // to hold the new readings object
            if (reading > 5) {
              continue;
            }
            let ecgData = {
              x: samplesCounter++,
              y: reading
            };
            // push the new ECG values to the values state
            data.values.push(ecgData);
          }
        } // end of for 

        this.setState({
          data: [
            data
          ]
        });
        samplesCounter = 0;
        data = {
          values: [
            { x: 0, y: 0 }
          ]
        };
      }
    });

  }

  render() {

    return (
      <div className="App">
       <h2 style={{marginTop:"100px"}}>ECG</h2>
        <LineChart
          data={this.state.data}
          width={1200}
          height={600}
          margin={{ top: 10, bottom: 50, left: 50, right: 10 }} />
      </div>
    );
  }
}

export default ECG;