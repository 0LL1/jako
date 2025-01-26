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

{#if personOneState.current?.name || personTwoState.current?.name}
  <footer
    class="bg-light dark:bg-dark dark:text-light sticky bottom-0 z-10 space-y-4 p-4 shadow dark:border-t dark:border-gray-800 dark:shadow-none"
  >
    <div class="flex gap-2">
      {#if personOneState.current?.name && personTwoState.current?.name}
        <div class="mx-auto">
          <TotalDifference
            personOne={personOneState.current}
            personTwo={personTwoState.current}
          />
          <TotalCost
            personOne={personOneState.current}
            personTwo={personTwoState.current}
          />
        </div>
      {/if}
      <button
        type="button"
        onclick={(): boolean => (minimized = !minimized)}
        class="btn size-8 self-start p-0"
        aria-label="Toggle footer"
      >
        <div class={{ "rotate-180": minimized }}>
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
        <PersonTotals person={personOneState.current} />
        <PersonTotals person={personTwoState.current} />
      </div>
    {/if}
  </footer>
{/if}
