import React, { Component } from "react";

export default class ReactCursorDiv extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0
    };
    this._onMouseMove = this._onMouseMove.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousemove', this._onMouseMove);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this._onMouseMove);
  }

  _onMouseMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  }

  render() {
    const { x, y } = this.state;
    const { style, offsetX, offsetY, ...rest } = this.props;
    return (
      <div
        {...rest}
        onMouseMove={this._onMouseMove.bind(this)}
        style={Object.assign(
          {
            position: "fixed",
            left: x + (offsetX || 0),
            top: y + (offsetY || 0)
          },
          style
        )}
      />
    );
  }
}

