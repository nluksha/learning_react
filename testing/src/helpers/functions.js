export function timesTwo(n) {
  return n * 2;
}

export function order(items) {
  const total = items.reduce((p, item) => p + item.price, 0);

  return {
    orderItems: [...items],
    total
  };
}
