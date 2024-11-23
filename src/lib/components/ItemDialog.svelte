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
  class="bg-light text-dark dark:bg-dark dark:text-light z-20 m-auto min-w-88 rounded-lg border-8 p-8 shadow-lg dark:shadow-none"
  class:border-blue={itemDialogState.value.type === "total"}
  class:border-green={itemDialogState.value.type === "forSelf"}
  class:border-red={itemDialogState.value.type === "forOther"}
>
  {#key itemDialogState.value.value}
    <div
      class="absolute top-1 right-1"
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
