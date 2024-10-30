<script lang="ts">
  import { Pencil } from "$lib/components/Icons.svelte";
  import ItemInput from "$lib/components/ItemInput.svelte";
  import {
    itemDialogState,
    personOneState,
    personTwoState,
  } from "$lib/state.svelte";

  let dialogElement: HTMLDialogElement;

  function onSubmit(value: number): void {
    const { personId, type, index } = itemDialogState.value;

    if (
      personId !== undefined &&
      type !== undefined &&
      index !== undefined &&
      !isNaN(index)
    ) {
      const state = personId === 1 ? personOneState : personTwoState;
      const items = state.value[type];
      items[index] = value;
    }

    dialogElement.close();
  }
</script>

<dialog
  id="edit-item"
  bind:this={dialogElement}
  class="shadow-lg dark:shadow-none z-20 rounded-lg border-8 bg-light p-8 text-dark dark:bg-dark dark:text-light"
  class:border-blue={itemDialogState.value.type === "total"}
  class:border-green={itemDialogState.value.type === "forSelf"}
  class:border-red={itemDialogState.value.type === "forOther"}
>
  {#key itemDialogState.value.value}
    <div
      class="absolute right-1 top-1"
      class:text-blue={itemDialogState.value.type === "total"}
      class:text-green={itemDialogState.value.type === "forSelf"}
      class:text-red={itemDialogState.value.type === "forOther"}
    >
      <Pencil class="size-6" />
    </div>
    <ItemInput
      label="New value"
      {onSubmit}
      initialValue={itemDialogState.value.value}
      autofocus
    />
  {/key}
</dialog>
