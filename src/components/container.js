import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import BarChart from './bar-chart'
import Tooltip from './tooltip'

class Container extends Component {

  constructor(props) {
    super(props);
    const tooltipStatus = {opacity: 0}
    this.state = {tooltipStatus}
  }

  handleTooltipFire(tooltipStatus) {
    console.log(tooltipStatus)
    this.setState({tooltipStatus})
  }

  render() {
    const {opacity, top, left, text} = this.state.tooltipStatus
    return (
      <div>
        <BarChart onTooltipFire={this.handleTooltipFire.bind(this)} />
        <Tooltip opacity={opacity} top={top} left={left}>{text}</Tooltip>
      </div>
    )
  }
}

export default Container
