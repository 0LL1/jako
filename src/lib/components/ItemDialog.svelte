<script lang="ts" module>
  import { Pencil, X } from "$lib/components/Icons.svelte";
  import ItemInput from "$lib/components/ItemInput.svelte";
  import type { ItemType } from "$lib/types";

  let dialogElement: HTMLDialogElement | null;

  let valueState = $state<number | undefined>(undefined);
  let typeState = $state<ItemType | null>(null);
  let onSubmit = (_: number): void => {};

  export function open({
    value,
    type,
    callback,
  }: {
    value: number;
    type: ItemType;
    callback: (value: number) => void;
  }): void {
    valueState = value;
    typeState = type;
    onSubmit = callback;
    dialogElement?.showModal();
  }

  function handleSubmit(value: number): void {
    onSubmit(value);
    dialogElement?.close();
  }
</script>

<dialog
  bind:this={dialogElement}
  class={[
    "bg-light text-dark dark:bg-dark dark:text-light z-20 m-auto min-w-88 rounded-lg border-8 p-8 shadow-lg dark:shadow-none",
    typeState === "total" && "border-blue",
    typeState === "forSelf" && "border-green",
    typeState === "forOther" && "border-red",
  ]}
>
  {#key valueState}
    <div class="absolute top-0 left-0 flex w-full justify-between gap-4 p-1">
      <div class="flex size-8 items-center justify-center">
        <Pencil
          class={[
            "size-6",
            typeState === "total" && "text-blue",
            typeState === "forSelf" && "text-green",
            typeState === "forOther" && "text-red",
          ]}
        />
      </div>
      <button
        type="button"
        onclick={() => dialogElement?.close()}
        class="btn size-8 self-start p-0"
        aria-label="Close dialog"
      >
        <X class="size-6" />
      </button>
    </div>
    <ItemInput
      label="New value"
      onSubmit={handleSubmit}
      initialValue={valueState}
      autofocus
    />
  {/key}
</dialog>
