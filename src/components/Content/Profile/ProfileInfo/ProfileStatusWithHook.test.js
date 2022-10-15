import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";

import ProfileStatusWithHook from "./ProfileStatusWithHook";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("callback should be called", async() => {
  act(() => {
    render(<ProfileStatusWithHook status="my-app" updateStatus={()=>{}}/>, container);
  });
  const span = await document.querySelector(".status");
  expect(span.textContent).toBe("my-app");
});

it("after click show input instead span", async() => {
  render(<ProfileStatusWithHook status="my-app" updateStatus={()=>{}}/>, container);
  const span = await document.querySelector('span')
  fireEvent.click(span)
  const input = await document.querySelector('input')
  expect(input.value).toBe("my-app");
})
 /*  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(button.innerHTML).toBe("Turn off");

  act(() => {
    for (let i = 0; i < 5; i++) {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });

  expect(onChange).toHaveBeenCalledTimes(6);
  expect(button.innerHTML).toBe("Turn on"); */
  function setup(jsx) {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    }
  }