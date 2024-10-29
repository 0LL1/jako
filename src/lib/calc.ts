import type { PersonData } from "$lib/types";

export function reduced(items: number[] = []): number {
  return items.reduce((acc, item) => acc + item, 0);
}

export function calculateNetAmount(person: PersonData): number {
  const total = reduced(person.total);
  const forSelf = reduced(person.forSelf);
  const forOther = reduced(person.forOther);

  return total - forSelf - forOther;
}

export function calculateDifference(
  personOne: PersonData,
  personTwo: PersonData,
): number {
  const oneNetAmount = calculateNetAmount(personOne);
  const twoNetAmount = calculateNetAmount(personTwo);
  const difference =
    oneNetAmount / 2 -
    twoNetAmount / 2 +
    reduced(personOne.forOther) -
    reduced(personTwo.forOther);

  return difference;
}
