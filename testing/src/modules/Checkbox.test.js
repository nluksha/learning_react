import { render, fireEvent } from "@testing-library/react";
import Checkbox from "./Checkbox";

test("Selecting the checkbox", () => {
  const { getByTestId } = render(<Checkbox/>);

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const checkbox = getByTestId("checkbox");

  fireEvent.click(checkbox);

  expect(checkbox.checked).toEqual(true);
});