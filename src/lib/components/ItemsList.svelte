<script lang="ts">
  import { X } from "$lib/components/Icons.svelte";
  import { open } from "$lib/components/ItemDialog.svelte";
  import type { ItemType } from "$lib/types";

  type Props = {
    type: ItemType;
    items: number[];
  };

  let { type, items = $bindable([]) }: Props = $props();

  function removeItem(index: number): void {
    items = items.filter((_, i) => i !== index);
  }
</script>

<div class="flex flex-wrap gap-1">
  {#each items as item, index (index)}
    <div
      class={[
        "text-dark focus-outline flex items-center rounded-full hover:brightness-110",
        type === "total" && "bg-blue",
        type === "forSelf" && "bg-green",
        type === "forOther" && "bg-red",
      ]}
    >
      <button
        type="button"
        class="btn bg-transparent text-sm font-extrabold"
        onclick={() =>
          open({
            value: item,
            type,
            callback: (value: number): void => {
              items[index] = value;
            },
          })}
      >
        {item.toFixed(2)}
      </button>
      <button
        type="button"
        class="btn size-7 bg-transparent p-0"
        onclick={(): void => removeItem(index)}
        aria-label="Remove item"
      >
        <X class="size-4" />
      </button>
    </div>
  {/each}
</div>
