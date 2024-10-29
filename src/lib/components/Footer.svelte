<script lang="ts">
  import PersonTotals from "$lib/components/PersonTotals.svelte";
  import TotalDifference from "$lib/components/TotalDifference.svelte";
  import { personOneState, personTwoState } from "$lib/state.svelte";
  import "@fontsource-variable/outfit";

  import { CaretDown } from "$lib/components/Icons.svelte";
  import TotalCost from "$lib/components/TotalCost.svelte";
  import { slide } from "svelte/transition";
  let minimized: boolean = $state(false);
</script>

{#if personOneState.value?.name || personTwoState.value?.name}
  <footer
    class="dark:shadow-none sticky bottom-0 z-10 space-y-4 bg-light p-4 shadow dark:border-t dark:border-gray-800 dark:bg-dark dark:text-light"
  >
    <div class="flex">
      {#if personOneState.value?.name && personTwoState.value?.name}
        <div class="mx-auto">
          <TotalDifference
            personOne={personOneState.value}
            personTwo={personTwoState.value}
          />
          <TotalCost
            personOne={personOneState.value}
            personTwo={personTwoState.value}
          />
        </div>
      {/if}
      <button
        onclick={(): boolean => (minimized = !minimized)}
        class="btn size-8 self-start p-0"
        aria-label="Toggle footer"
      >
        <div class:rotate-180={minimized}>
          <CaretDown class="size-6" />
        </div>
      </button>
    </div>
    {#if !minimized}
      <div
        class="mx-auto grid w-full max-w-screen-xl grid-cols-2 gap-4"
        transition:slide={{
          duration: 200,
        }}
      >
        <PersonTotals person={personOneState.value} />
        <PersonTotals person={personTwoState.value} />
      </div>
    {/if}
  </footer>
{/if}
