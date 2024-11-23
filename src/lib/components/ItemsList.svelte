<script lang="ts">
  import { X } from "$lib/components/Icons.svelte";
  import { itemDialogState } from "$lib/state.svelte";
  import type { ItemType, PersonId } from "$lib/types";

  type Props = {
    personId: PersonId;
    type: ItemType;
    items: number[];
  };

  let { personId, type, items = $bindable([]) }: Props = $props();

  function selectToEdit(index: number): void {
    itemDialogState.value = {
      personId,
      type,
      index,
      value: items[index],
    };

    const dialogElement: HTMLDialogElement | null =
      document.querySelector("#edit-item");
    if (dialogElement) {
      dialogElement.showModal();
    }
  }

  function removeItem(index: number): void {
    items = items.filter((_, i) => i !== index);
  }
</script>

<div class="flex flex-wrap gap-1">
  {#each items as item, index (index)}
    <div
      class="text-dark focus:ring-dark flex items-center rounded-full hover:brightness-110"
      class:bg-blue={type === "total"}
      class:bg-green={type === "forSelf"}
      class:bg-red={type === "forOther"}
    >
      <button
        type="button"
        class="btn bg-transparent text-sm font-extrabold"
        onclick={() => selectToEdit(index)}
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
