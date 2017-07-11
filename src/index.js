import React, { Component } from "react";

export default class CursorDiv extends Component {
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
