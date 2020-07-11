import React, { Component } from "react";

import { Bar } from "react-chartjs-2";

class GraficaMinuto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: this.props.labels,
        dataSets: [
          {
            label: "Precipitation Prob",
            backgroundColor: "rgba(0,255,0,0.2)",
            borderColor: "black",
            borderWith: 1,
            data: this.props.data,
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="chart" style={{ width: "100%" }}>
        <Bar
          data={this.state.chartData}
          options={{
            maintainAspectRatio: false,
            responsive: true,
          }}
        />
      </div>
    );
  }
}

export default GraficaMinuto;
