<script lang="ts">
  import { reduced } from "$lib/calc";
  import type { ItemType, PersonData } from "$lib/types";

  type Props = {
    person: PersonData;
  };

  let { person }: Props = $props();
</script>

{#snippet total(type: ItemType, items?: number[])}
  <div
    class={[
      "text-xl underline decoration-8",
      type === "total" && "decoration-blue",
      type === "forSelf" && "decoration-green",
      type === "forOther" && "decoration-red",
    ]}
  >
    {reduced(items).toFixed(2)}
  </div>
{/snippet}

<div class="space-y-2 text-center font-extrabold">
  {#if person.name !== ""}
    <div class="max-w-full truncate uppercase">
      {person.name}
    </div>
    {@render total("total", person.total)}
    {@render total("forSelf", person.forSelf)}
    {@render total("forOther", person.forOther)}
  {/if}
</div>
