


import { describe, it, expect } from "vitest";
import { fizzBuzz } from "../app/fizzbuzz";

describe("FizzBuzz", () => {

    // Stage 1

    it("should return the number when no rule applies", () => {
        expect(fizzBuzz(1)).toBe("1");
    });

    it("should return Fizz when divisible by 3", () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    });

    it("should return Buzz when divisible by 5", () => {
        expect(fizzBuzz(5)).toBe("BuzzBuzz");
    });

    it("should return FizzBuzz when divisible by 3 and 5", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzzBuzz");
    });

    // Stage 2

    it("should return Fizz when the number contains 3", () => {
        expect(fizzBuzz(13)).toBe("Fizz");
    });

    it("should return Buzz when the number contains 5", () => {
        expect(fizzBuzz(52)).toBe("Buzz");
    });

    it("should return FizzBuzz when the number contains 3 and 5", () => {
        expect(fizzBuzz(53)).toBe("FizzBuzz");
    });

    it("should return FizzBuzzBuzz for 35", () => {
        expect(fizzBuzz(35)).toBe("FizzBuzzBuzz");
    });

    it("should return BuzzBuzz for 25", () => {
        expect(fizzBuzz(25)).toBe("BuzzBuzz");
    });

    it("should return FizzFizz when divisible by 3 and contains two 3 digits", () => {
        expect(fizzBuzz(33)).toBe("Fizz");
    });

});
