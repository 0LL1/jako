<script lang="ts">
  import { calculateDifference } from "$lib/calc";
  import type { PersonData } from "$lib/types";
  type Props = {
    personOne: PersonData;
    personTwo: PersonData;
  };

  let { personOne, personTwo }: Props = $props();

  let diff: number = $derived.by((): number =>
    calculateDifference(personOne, personTwo),
  );
</script>

<div
  class="flex flex-wrap items-baseline gap-x-2 gap-y-0 font-extrabold uppercase"
>
  {#if diff === 0}
    {personOne.name} and {personTwo.name} are even
  {:else}
    <span>
      {#if diff < 0}
        {personOne.name} owes {personTwo.name}
      {:else}
        {personTwo.name} owes {personOne.name}
      {/if}
    </span>
    <span class="text-2xl">{Math.abs(diff).toFixed(2)}</span>
  {/if}
</div>
