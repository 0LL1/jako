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
  <Header />
  <main class="mx-auto w-full max-w-screen-xl px-4 py-8">
    {@render children()}
  </main>
  <Footer />
</div>
