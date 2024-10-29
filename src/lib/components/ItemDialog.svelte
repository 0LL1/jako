<script lang="ts">
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
  class="shadow-lg dark:shadow-none z-20 rounded-md p-4"
  class:bg-blue={itemDialogState.value.type === "total"}
  class:bg-green={itemDialogState.value.type === "forSelf"}
  class:bg-red={itemDialogState.value.type === "forOther"}
>
  {#key itemDialogState.value.value}
    <ItemInput
      label="New value"
      {onSubmit}
      initialValue={itemDialogState.value.value}
      autofocus
    />
  {/key}
</dialog>
