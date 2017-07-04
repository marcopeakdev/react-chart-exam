import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Chart } from 'chart.js'

class BarChart extends Component {

  componentDidMount() {
    const ctx = this.node.getContext('2d')
    const onTooltipFire = this.props.onTooltipFire
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
          data: [ 8, 1, 4]
        },
        {
          label: "みかん",
          data: [ 5, 9, 4]
        }
        ],
      },
      options: {
        events: ["mousemove", "click", "touchstart", "touchmove", "touchend"],
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
          custom: function(tooltipModel) {
            if (tooltipModel.opacity === 0) {
              onTooltipFire({opacity: 0, left: 0, top: 0, text: ""})
              return
            }

            const position = this._chart.canvas.getBoundingClientRect();

            onTooltipFire({
              opacity: 1,
              left:  tooltipModel.caretX - 151 / 2 + 8,
              top: tooltipModel.caretY - tooltipModel.height - 8,
              text: tooltipModel.body[0].lines.join("")
            })
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
