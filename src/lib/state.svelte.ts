import { PersistedState } from "$lib/persistedState.svelte";
import type { ItemDialogData, PersonData } from "$lib/types";

class ItemDialogState {
  #value: ItemDialogData = $state({});

  constructor(value: ItemDialogData) {
    this.#value = value;
  }

  get value(): ItemDialogData {
    return this.#value;
  }

  set value(value: ItemDialogData) {
    this.#value = value;
  }

  reset(): void {
    this.#value = {};
  }
}

export const themeState = new PersistedState("theme", "light");

export const itemDialogState = new ItemDialogState({});

export const personOneState = new PersistedState<PersonData>("personOne", {
  id: 1,
  name: "",
  total: [],
  forSelf: [],
  forOther: [],
});

export const personTwoState = new PersistedState<PersonData>("personTwo", {
  id: 2,
  name: "",
  total: [],
  forSelf: [],
  forOther: [],
});
