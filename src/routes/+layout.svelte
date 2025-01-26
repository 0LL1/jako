<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import ItemDialog from "$lib/components/ItemDialog.svelte";
  import {
    personOneState,
    personTwoState,
    themeState,
  } from "$lib/state.svelte";
  import "@fontsource-variable/outfit";
  import type { Snippet } from "svelte";
  import "../app.css";
  import type { LayoutData } from "./$types";

  type Props = {
    data: LayoutData;
    children: Snippet;
  };

  let { data, children }: Props = $props();

  personOneState.current = data.personOne;
  personTwoState.current = data.personTwo;
  themeState.current = data.theme;
</script>

<svelte:head>
  <meta
    name="theme-color"
    content={`${themeState.current === "dark" ? "#030712" : "#ffffff"}`}
  />
</svelte:head>

<ItemDialog />
<div
  class="dark:bg-dark dark:text-light grid h-screen grid-rows-[auto_1fr_auto]"
>
  <Header />
  <main class="mx-auto w-full max-w-screen-xl px-4 py-8">
    {@render children()}
  </main>
  <Footer />
</div>
