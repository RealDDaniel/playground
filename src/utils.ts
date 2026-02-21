/**
 * A simple calculator module for demonstration
 */

export class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }

  power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  sqrt(n: number): number {
    if (n < 0) {
      throw new Error("Cannot calculate square root of negative number");
    }
    return Math.sqrt(n);
  }
}

/**
 * String utilities
 */
export class StringUtils {
  static capitalize(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  static reverse(str: string): string {
    return str.split("").reverse().join("");
  }

  static isPalindrome(str: string): boolean {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
  }

  static wordCount(str: string): number {
    return str.trim().split(/\s+/).filter((word) => word.length > 0).length;
  }
}

/**
 * Array utilities
 */
export class ArrayUtils {
  static sum(arr: number[]): number {
    return arr.reduce((acc, val) => acc + val, 0);
  }

  static average(arr: number[]): number {
    if (arr.length === 0) throw new Error("Cannot calculate average of empty array");
    return this.sum(arr) / arr.length;
  }

  static max(arr: number[]): number {
    if (arr.length === 0) throw new Error("Cannot find max of empty array");
    return Math.max(...arr);
  }

  static min(arr: number[]): number {
    if (arr.length === 0) throw new Error("Cannot find min of empty array");
    return Math.min(...arr);
  }

  static unique<T>(arr: T[]): T[] {
    return [...new Set(arr)];
  }
}
