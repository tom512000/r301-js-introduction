import { add, sub } from "../src/introduction";

test("add 1 to 2 equals 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("sub 1 to 2 equals 1", () => {
  expect(sub(1, 2)).toBe(1);
});
