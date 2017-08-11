import React, { Component } from 'react';
import { BarChart,XAxis,YAxis,CartesianGrid, Tooltip, Legend, Bar} from  "recharts";

import './style.css';

class Statsy extends Component {
  render() {
    const data = [
      {data: '11/08', sniadanie: 200, IIsniadanie: 0,   obiad: 100, kolacja: 100},
      {data: '12/08', sniadanie: 100, IIsniadanie: 100, obiad: 100, kolacja: 100},
      {data: '13/08', sniadanie: 100, IIsniadanie: 100, obiad: 0,   kolacja: 0	},
    ];

    return (
      <div className="Statsy">
       statsy
        <BarChart width={200} height={200} data={data}>
          <XAxis dataKey="data"/>
          <YAxis dataKey="sniadanie"/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
          <Bar dataKey="sniadanie" stackId="a" fill="#8884d8" />
          <Bar dataKey="IIsniadanie" stackId="b" fill="#82ca9d" />
          <Bar dataKey="obiad" stackId="a" fill="#ff252c" />
          <Bar dataKey="kolacja" stackId="b" fill="#ff3d2e" />
        </BarChart>
      </div>
    );
  }
}
 
export default Statsy;
