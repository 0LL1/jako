<script lang="ts">
  import { GitHubLogo } from "$lib/components/Icons.svelte";
  import ItemDialog from "$lib/components/ItemDialog.svelte";
  import PersonTotals from "$lib/components/PersonTotals.svelte";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import TotalDifference from "$lib/components/TotalDifference.svelte";
  import {
    personOneState,
    personTwoState,
    themeState,
  } from "$lib/state.svelte";
  import "@fontsource-variable/outfit";
  import type { Snippet } from "svelte";
  import "../app.postcss";
  import type { LayoutData } from "./$types";

  type Props = {
    data: LayoutData;
    children: Snippet;
  };

  let { data, children }: Props = $props();

  personOneState.value = data.personOne;
  personTwoState.value = data.personTwo;
  themeState.value = data.theme;
</script>

<ItemDialog />

<div
  class="grid h-screen grid-rows-[auto_1fr_auto] dark:bg-dark dark:text-light"
>
  <header
    class="dark:shadow-none sticky top-0 z-10 flex items-center justify-between bg-light p-4 text-dark shadow dark:border-b dark:border-gray-800 dark:bg-dark dark:text-light"
  >
    <h1 class="text-4xl font-extrabold">JAKO</h1>

    <div class="flex gap-4">
      <ThemeToggle />
      <a
        href="https://github.com/0LL1/jako"
        target="_blank"
        rel="noreferrer noopener"
        class="btn size-10 p-0"
        aria-label="GitHub repository"
      >
        <GitHubLogo class="size-8" />
      </a>
    </div>
  </header>

  <main class="mx-auto w-full max-w-screen-xl px-4 py-8">
    {@render children()}
  </main>

  {#if personOneState.value?.name || personTwoState.value?.name}
    <footer
      class="dark:shadow-none sticky bottom-0 z-10 space-y-4 bg-light p-4 shadow dark:border-t dark:border-gray-800 dark:bg-dark dark:text-light"
    >
      <div class="mx-auto grid w-full max-w-screen-xl grid-cols-2 gap-4">
        <PersonTotals person={personOneState.value} />
        <PersonTotals person={personTwoState.value} />
      </div>
      {#if personOneState.value?.name && personTwoState.value?.name}
        <div class="mx-auto w-full max-w-screen-xl">
          <TotalDifference
            personOne={personOneState.value}
            personTwo={personTwoState.value}
          />
        </div>
      {/if}
    </footer>
  {/if}
</div>
