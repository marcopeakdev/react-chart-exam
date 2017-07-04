import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Chart } from 'chart.js'

class BarChart extends Component {

  componentDidMount() {
    const ctx = this.node.getContext('2d')
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["好き", "嫌い", "どちらでもない"],
        datasets: [{
          label: "りんご",
          data: [ 5, 1, 4]
        },
        {
          label: "なし",
          data: [ 8, 1, 1]
        },
        {
          label: "みかん",
          data: [ 2, 1, 7]
        }],
      },
      options: {
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              max: 10,
            },
          }],
        },
        tooltips: {
          enabled: false,
          mode: 'nearest',
          position: 'nearest',
          intersect: false,
          custom: function(tooltip) {
            console.log(this._chart, tooltip)
            return this._chart;
            // return tooltip
          }
        },
      }
    })
  }

  render() {
    return (
      <div>
        <canvas ref={(node) => this.node = node}></canvas>
      </div>
    )
  }
}

export default BarChart
