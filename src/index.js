import React, { Component } from "react";

export default class CursorDiv extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0
    };
  }

  componentDidMount() {
    window.onmousemove = this._onMouseMove.bind(this);
  }

  _onMouseMove(e) {
    this.setState({
      x: e.screenX,
      y: e.screenY
    });
  }

  render() {
    const { x, y } = this.state;
    const { style, ...rest } = this.props;
    return (
      <div
        {...rest}
        onMouseMove={this._onMouseMove.bind(this)}
        style={Object.assign(
          {
            position: "fixed",
            left: x,
            top: y
          },
          style
        )}
      />
    );
  }
}
