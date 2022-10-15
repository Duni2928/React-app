import MainApp from './App';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

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

test("MainApp should be rendered ", () => {
  act(() => {
    render(<MainApp />, container);
  });
});

