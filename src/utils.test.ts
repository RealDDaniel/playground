import { assertEquals, assertThrows } from "https://deno.land/std@0.214.0/assert/mod.ts";
import { ArrayUtils, Calculator, StringUtils } from "./utils.ts";

Deno.test("Calculator - addition", () => {
  const calc = new Calculator();
  assertEquals(calc.add(2, 3), 5);
  assertEquals(calc.add(-1, 1), 0);
  assertEquals(calc.add(0, 0), 0);
});

Deno.test("Calculator - subtraction", () => {
  const calc = new Calculator();
  assertEquals(calc.subtract(5, 3), 2);
  assertEquals(calc.subtract(0, 5), -5);
  assertEquals(calc.subtract(-3, -2), -1);
});

Deno.test("Calculator - multiplication", () => {
  const calc = new Calculator();
  assertEquals(calc.multiply(2, 3), 6);
  assertEquals(calc.multiply(-2, 3), -6);
  assertEquals(calc.multiply(0, 100), 0);
});

Deno.test("Calculator - division", () => {
  const calc = new Calculator();
  assertEquals(calc.divide(6, 2), 3);
  assertEquals(calc.divide(5, 2), 2.5);
  assertThrows(
    () => calc.divide(5, 0),
    Error,
    "Cannot divide by zero",
  );
});

Deno.test("Calculator - power", () => {
  const calc = new Calculator();
  assertEquals(calc.power(2, 3), 8);
  assertEquals(calc.power(5, 0), 1);
  assertEquals(calc.power(10, 2), 100);
});

Deno.test("Calculator - square root", () => {
  const calc = new Calculator();
  assertEquals(calc.sqrt(9), 3);
  assertEquals(calc.sqrt(16), 4);
  assertThrows(
    () => calc.sqrt(-1),
    Error,
    "Cannot calculate square root of negative number",
  );
});

Deno.test("StringUtils - capitalize", () => {
  assertEquals(StringUtils.capitalize("hello"), "Hello");
  assertEquals(StringUtils.capitalize("WORLD"), "World");
  assertEquals(StringUtils.capitalize(""), "");
});

Deno.test("StringUtils - reverse", () => {
  assertEquals(StringUtils.reverse("hello"), "olleh");
  assertEquals(StringUtils.reverse("Deno"), "oneD");
  assertEquals(StringUtils.reverse(""), "");
});

Deno.test("StringUtils - isPalindrome", () => {
  assertEquals(StringUtils.isPalindrome("racecar"), true);
  assertEquals(StringUtils.isPalindrome("A man a plan a canal Panama"), true);
  assertEquals(StringUtils.isPalindrome("hello"), false);
  assertEquals(StringUtils.isPalindrome("Was it a car or a cat I saw?"), true);
});

Deno.test("StringUtils - wordCount", () => {
  assertEquals(StringUtils.wordCount("hello world"), 2);
  assertEquals(StringUtils.wordCount("  multiple   spaces  "), 2);
  assertEquals(StringUtils.wordCount(""), 0);
  assertEquals(StringUtils.wordCount("single"), 1);
});

Deno.test("ArrayUtils - sum", () => {
  assertEquals(ArrayUtils.sum([1, 2, 3, 4, 5]), 15);
  assertEquals(ArrayUtils.sum([]), 0);
  assertEquals(ArrayUtils.sum([-1, 1]), 0);
});

Deno.test("ArrayUtils - average", () => {
  assertEquals(ArrayUtils.average([1, 2, 3, 4, 5]), 3);
  assertEquals(ArrayUtils.average([10, 20, 30]), 20);
  assertThrows(
    () => ArrayUtils.average([]),
    Error,
    "Cannot calculate average of empty array",
  );
});

Deno.test("ArrayUtils - max", () => {
  assertEquals(ArrayUtils.max([1, 5, 3, 9, 2]), 9);
  assertEquals(ArrayUtils.max([-5, -1, -10]), -1);
  assertThrows(
    () => ArrayUtils.max([]),
    Error,
    "Cannot find max of empty array",
  );
});

Deno.test("ArrayUtils - min", () => {
  assertEquals(ArrayUtils.min([1, 5, 3, 9, 2]), 1);
  assertEquals(ArrayUtils.min([-5, -1, -10]), -10);
  assertThrows(
    () => ArrayUtils.min([]),
    Error,
    "Cannot find min of empty array",
  );
});

Deno.test("ArrayUtils - unique", () => {
  assertEquals(ArrayUtils.unique([1, 2, 2, 3, 3, 3]), [1, 2, 3]);
  assertEquals(ArrayUtils.unique(["a", "b", "a", "c"]), ["a", "b", "c"]);
  assertEquals(ArrayUtils.unique([]), []);
});
