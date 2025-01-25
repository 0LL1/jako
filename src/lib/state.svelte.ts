import { PersistedState } from "$lib/persistedState.svelte";
import type { PersonData } from "$lib/types";

export const themeState = new PersistedState("theme", "light");

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
