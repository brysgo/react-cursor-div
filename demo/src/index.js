import React, { Component } from "react";
import { render } from "react-dom";

import CursorDiv from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1> React Cursor Div Demo </h1>
        <CursorDiv
          style={{
            backgroundColor: "#222",
            border: "1px solid #000",
            borderRadius: 5,
            color: "#FFF"
          }}
        >
          This will follow the cursor!
        </CursorDiv>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
