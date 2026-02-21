#!/usr/bin/env -S deno run --allow-env

import { ArrayUtils, Calculator, StringUtils } from "./src/utils.ts";

function displayBanner() {
  console.log("");
  console.log("Deno Utilities Demo");
  console.log("\n");
}

function demonstrateCalculator() {
  console.log("Calculator Demo:");
  const calc = new Calculator();

  console.log(`  10 + 5 = ${calc.add(10, 5)}`);
  console.log(`  10 - 5 = ${calc.subtract(10, 5)}`);
  console.log(`  10 × 5 = ${calc.multiply(10, 5)}`);
  console.log(`  10 ÷ 5 = ${calc.divide(10, 5)}`);
  console.log(`  2³ = ${calc.power(2, 3)}`);
  console.log(`  √16 = ${calc.sqrt(16)}\n`);
}

function demonstrateStringUtils() {
  console.log("String Utils Demo:");

  const text = "hello world";
  console.log(`  Original: "${text}"`);
  console.log(`  Capitalized: "${StringUtils.capitalize(text)}"`);
  console.log(`  Reversed: "${StringUtils.reverse(text)}"`);
  console.log(`  Word count: ${StringUtils.wordCount(text)}`);

  const palindrome = "racecar";
  console.log(`  Is "${palindrome}" a palindrome? ${StringUtils.isPalindrome(palindrome)}\n`);
}

function demonstrateArrayUtils() {
  console.log("Array Utils Demo:");

  const numbers = [5, 2, 8, 1, 9, 3];
  console.log(`  Array: [${numbers.join(", ")}]`);
  console.log(`  Sum: ${ArrayUtils.sum(numbers)}`);
  console.log(`  Average: ${ArrayUtils.average(numbers)}`);
  console.log(`  Max: ${ArrayUtils.max(numbers)}`);
  console.log(`  Min: ${ArrayUtils.min(numbers)}`);

  const duplicates = [1, 2, 2, 3, 3, 3, 4];
  console.log(`  Array with duplicates: [${duplicates.join(", ")}]`);
  console.log(`  Unique values: [${ArrayUtils.unique(duplicates).join(", ")}]\n`);
}

function main() {
  displayBanner();
  demonstrateCalculator();
  demonstrateStringUtils();
  demonstrateArrayUtils();

  console.log("Demo completed successfully!");
  console.log("");
  console.log("Run tests with: deno test");
}

if (import.meta.main) {
  main();
}
