import { b } from "..";

test("convert string to bytes", () => {
  const bytes = b`hello wolrd`;
  expect(bytes).toEqual(
    new Uint8Array([104, 101, 108, 108, 111, 32, 119, 111, 108, 114, 100])
  );
});

test("convert template strings", () => {
  let a = 12;
  const aBytes = b`hello ${a}`;
  expect(aBytes).toEqual(new Uint8Array([104, 101, 108, 108, 111, 32, 49, 50]));
});
