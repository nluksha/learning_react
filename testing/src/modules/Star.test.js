import React from 'react';
import {expect} from '@jest/globals';
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Star from './Star';

test("Renders Star", () => {
  const {getByText } = render(<Star/>);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const h1 = getByText(/Great Star/);

  expect(h1).toHaveTextContent("Great Star");
});
