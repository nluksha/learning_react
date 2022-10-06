import {timesTwo, order} from './functions';


describe("Math", () => {
  test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
  });
});



const menuItems = [
  {
    id: 1,
    name: 'Tatter',
    price: 19.5
  },
  {
    id: 2,
    name: 'Lobster',
    price: 16.5
  },
  {
    id: 3,
    name: 'Motley',
    price: 21.5
  },
  {
    id: 4,
    name: 'Trash',
    price: 19.5
  }
];

test("Build an order object", () => {
  const result = {
    orderItems: menuItems,
    total: 77
  }

  expect(order(menuItems)).toEqual(result);
});