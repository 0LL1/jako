import type { PersonData } from "$lib/types";
import { describe, expect, it } from "vitest";
import { calculateDifference, calculateNetAmount, reduced } from "./calc";

describe("calc.ts", () => {
  describe("reduced", () => {
    it("should return 0 for an empty array", () => {
      expect(reduced([])).toBe(0);
    });

    it("should return the sum of the array elements", () => {
      expect(reduced([1, 2, 3])).toBe(6);
      expect(reduced([10, 20, 30])).toBe(60);
    });

    it("should handle negative numbers", () => {
      expect(reduced([-1, -2, -3])).toBe(-6);
      expect(reduced([1, -2, 3])).toBe(2);
    });
  });

  describe("calculateNetAmount", () => {
    it("should calculate the net amount correctly", () => {
      const person: PersonData = {
        id: 1,
        name: "Person One",
        total: [100, 200, 300],
        forSelf: [50, 100, 150],
        forOther: [25, 50, 75],
      };
      expect(calculateNetAmount(person)).toBe(150);
    });

    it("should handle empty arrays", () => {
      const person: PersonData = {
        id: 2,
        name: "Person Two",
        total: [],
        forSelf: [],
        forOther: [],
      };
      expect(calculateNetAmount(person)).toBe(0);
    });
  });

  describe("calculateDifference", () => {
    it("should calculate the difference correctly 1", () => {
      const personOne: PersonData = {
        id: 1,
        name: "Person One",
        total: [1, 1, 1],
        forSelf: [1, 2],
        forOther: [1],
      };

      const personTwo: PersonData = {
        id: 2,
        name: "Person Two",
        total: [1, 1, 1],
        forSelf: [1],
        forOther: [1],
      };

      expect(calculateDifference(personOne, personTwo)).toBe(-1);
    });

    it("should calculate the difference correctly 2", () => {
      const personOne: PersonData = {
        id: 1,
        name: "Person One",
        total: [1, 1, 1],
        forSelf: [1, 2],
        forOther: [1],
      };

      const personTwo: PersonData = {
        id: 2,
        name: "Person Two",
        total: [1, 1, 1],
        forSelf: [1, 4],
        forOther: [1],
      };

      expect(calculateDifference(personOne, personTwo)).toBe(1);
    });

    it("should handle cases where both persons have the same data", () => {
      const personOne: PersonData = {
        id: 1,
        name: "Person One",
        total: [100, 200, 300],
        forSelf: [50, 100, 150],
        forOther: [25, 50, 75],
      };

      const personTwo: PersonData = {
        id: 2,
        name: "Person Two",
        total: [100, 200, 300],
        forSelf: [50, 100, 150],
        forOther: [25, 50, 75],
      };

      expect(calculateDifference(personOne, personTwo)).toBe(0);
    });

    it("should handle empty arrays", () => {
      const personOne: PersonData = {
        id: 1,
        name: "Person One",
        total: [],
        forSelf: [],
        forOther: [],
      };

      const personTwo: PersonData = {
        id: 2,
        name: "Person Two",
        total: [],
        forSelf: [],
        forOther: [],
      };

      expect(calculateDifference(personOne, personTwo)).toBe(0);
    });
  });
});
