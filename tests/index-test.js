import expect, { createSpy } from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import ReactTestUtils from "react-test-utils";

import CursorDiv from "src/";

describe("CursorDiv", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("shows children just like a div", () => {
    render(<CursorDiv> some child text </CursorDiv>, node, () => {
      expect(node.innerHTML).toContain("some child text");
    });
  });

  it("follows the mouse cursor", () => {
    render(<CursorDiv> some child text </CursorDiv>, node, () => {
      expect(node.innerHTML).toContain("some child text");
    });
    window.onmousemove({
      screenX: 10,
      screenY: 20
    });
    expect(node.innerHTML).toContain(`style="position: fixed; left: 10px; top: 20px;"`);
    window.onmousemove({
      screenX: 34,
      screenY: 14
    });
    expect(node.innerHTML).toContain(`style="position: fixed; left: 34px; top: 14px;"`);
  });
});
