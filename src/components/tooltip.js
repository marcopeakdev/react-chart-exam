import React, { Component } from 'react'
import { css } from 'glamor'

let rule = css({
  position: "relative",
  display: "inline-block",
  padding: "0 15px",
  width: "auto",
  minWidth: "115px",
  height: "40px",
  lineHeight: "34px",
  color: "#19283C",
  textAlign: "center",
  background: "#F6F6F6",
  border: "3px solid #19283C",
  zIndex: 0,
  ":before": {
    content: "' '",
    position: "absolute",
    bottom: "-8px",
    left: "50%",
    marginLeft: "-9px",
    width: "0px",
    height: "0px",
    borderStyle: "solid",
    borderWidth: "9px 9px 0 9px",
    borderColor: "#F6F6F6 transparent transparent transparent",
    zIndex: 0
  },
  ":after": {
    content: "' '",
    position: "absolute",
    bottom: "-12px",
    left: "50%",
    marginLeft: "-10px",
    width: "0px",
    height: "0px",
    borderStyle: "solid",
    borderWidth: "10px 10px 0 10px",
    borderColor: "#19283C transparent transparent transparent",
    zIndex: -1
  }
})

class Tooltip extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className={`${rule}`}>{this.props.children}</div>
    )
  }
}

export default Tooltip
