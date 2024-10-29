import { browser } from "$app/environment";
import type { PersonData, Theme } from "$lib/types";
import type { LayoutLoad } from "./$types";

export const ssr = false;

export const load: LayoutLoad = () => {
  const storedPersonOne = localStorage.getItem("personOne");
  const storedPersonTwo = localStorage.getItem("personTwo");
  const storedTheme = localStorage.getItem("theme");

  const personOne: PersonData = storedPersonOne
    ? JSON.parse(storedPersonOne)
    : {
        id: 1,
        name: "",
        total: [],
        forSelf: [],
        forOther: [],
      };

  const personTwo: PersonData = storedPersonTwo
    ? JSON.parse(storedPersonTwo)
    : {
        id: 2,
        name: "",
        total: [],
        forSelf: [],
        forOther: [],
      };

  const theme: Theme = JSON.parse(storedTheme || "light");

  if (browser && theme === "dark") {
    document.documentElement.classList.add("dark");
  }

  return {
    personOne,
    personTwo,
    theme,
  };
};
